import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, RefreshControl, AsyncStorage } from 'react-native'
import styles from './Styles'
import colors from '../../styles/Colors'
import { openModal } from '../../store/actions/modal'
import { openConfirmation } from '../../store/actions/confirmation'
import { connect } from 'react-redux'
import axios from 'axios'
import { api } from '../../Common'
import UserCard from './user_card/UserCard'
import HeaderLogout from './header/HeaderLogout'
import ConfirmationLogout from '../../interface/logout_confirm/LogoutConfirm'

class Users extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Usuários',
            headerTintColor: '#ffffff',
            headerStyle: styles.containerHeader,
            headerRight: (
                <HeaderLogout onLogout={navigation.getParam('openConfirmation')} />
            ),
        };
    };

    _openConfirmation = () => {
        this.props.openConfirmation('confirma logout')
    }

    state = {
        initLoading: false,
        loading: false,
        page: 1,
        stopRequest: false,
        users: [],
        total_users: null
    }

    componentDidMount() {
        this.props.navigation.setParams({ openConfirmation: this._openConfirmation });
        this.getInit()
    }

    getInit = async () => {
        await this.setState({ initLoading: true, page: 1, stopRequest: false, users: [] });
        await this.getUsers()
        this.setState({ initLoading: false });
    }

    onRefresh = async () => {
        await this.setState({ page: 1, stopRequest: false, users: [] });
        this.setState({ initLoading: true });
        await this.getUsers()
        this.setState({ initLoading: false });
    }

    getUsers = async () => {
        if (this.state.loading || this.state.stopRequest) return;
        this.setState({ loading: true });
        try {
            const token = await AsyncStorage.getItem('token')
            const res = await axios.get(`${api}/users`, {
                params: {
                    page: this.state.page
                },
                headers: {'Token': token},
            })
            await this.setState({
                users: [...this.state.users, ...res.data.data],
                loading: false,
                page: this.state.page + 1,
                stopRequest: res.data.total == (this.state.users.length + res.data.data.length) ? true : false
            })
        } catch (err) {
            this.setState({ loading: false });
            this.props.openModal(err.message, 'error')
        }
    }

    openUser = (user_id) => {
        this.props.navigation.navigate('User', { user_id })
    }

    renderFooter = () => {
        if (!this.state.loading || this.state.page == 1) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.initLoading ?
                        <View style={styles.loadingInit}>
                            <ActivityIndicator size="large" color={colors.primary} />
                        </View>
                        :
                        <FlatList
                            data={this.state.users}
                            keyExtractor={(item, index) => `key ${index}`}
                            style={styles.list}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.loading}
                                    onRefresh={this.onRefresh}
                                />
                            }
                            onEndReached={this.getUsers}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={(!this.state.loading || this.state.page == 1) ? null : this.renderFooter}
                            renderItem={({ item }) => <UserCard {...item} selectUser={this.openUser}></UserCard>}
                        />
                }
                <ConfirmationLogout {...this.props} />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (msg, type) => dispatch(openModal(msg, type)),
        openConfirmation: (msg) => dispatch(openConfirmation(msg))
    }
}

export default connect(null, mapDispatchToProps)(Users)