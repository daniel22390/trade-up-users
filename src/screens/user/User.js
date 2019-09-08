import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    Image,
    ScrollView,
    AsyncStorage
} from 'react-native'
import styles from './Styles'
import colors from '../../styles/Colors'
import { openModal } from '../../store/actions/modal'
import { connect } from 'react-redux'
import axios from 'axios'
import { api } from '../../Common'
import UserDetail from './user_detail/UserDetail'

class User extends Component {

    state = {
        loading: true,
        user: null
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        this.setState({ loading: true })
        try {
            const token = await AsyncStorage.getItem('token')
            const res = await axios.get(`${api}/users/${this.props.navigation.getParam('user_id')}`, {
                params: {},
                headers: {'Token': token},
            })
            await this.setState({
                user: res.data.data,
                loading: false
            })
        } catch (err) {
            this.setState({ loading: false });
            this.props.openModal(err.message, 'error')
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTintColor: '#ffffff',
            headerStyle: styles.containerHeader,
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    {
                        this.state.loading ?
                            <View style={styles.loadingInit}>
                                <ActivityIndicator size="large" color={'white'} />
                            </View>
                            :
                            <Image source={{ uri: this.state.user.avatar }} style={styles.image}></Image>
                    }
                </View>
                {
                    this.state.loading ?
                        <View style={styles.loadingInit}>
                            <ActivityIndicator size="large" color={colors.primary} />
                        </View>
                        :
                        <ScrollView style={styles.info}>
                            <UserDetail label={'Nome'} value={this.state.user.first_name} />
                            <UserDetail label={'Sobrenome'} value={this.state.user.last_name} />
                            <UserDetail label={'Email'} value={this.state.user.email} />
                        </ScrollView>
                }
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (msg, type) => dispatch(openModal(msg, type))
    }
}

export default connect(null, mapDispatchToProps)(User)