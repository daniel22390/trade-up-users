import React, {Component} from 'react'
import {View, ActivityIndicator, FlatList, RefreshControl} from 'react-native'
import styles from './Style'
import colors from '../../styles/Colors'
import {openModal} from '../../store/actions/modal'
import {connect} from 'react-redux'
import axios from 'axios'
import { api } from '../../Common'
import UserCard from './user_card/UserCard'

class Users extends Component {

    state = {
        initLoading: false,
        loading: false,
        page: 1,
        stopRequest: false,
        users: [],
        total_users: null
    }

    componentDidMount(){
        this.getInit()
    }

    getInit = async () => {
        await this.setState({initLoading: true, page: 1, stopRequest: false, users: []});
        await this.getUsers()
        this.setState({initLoading: false});
    }

    onRefresh = async () => {
        await this.setState({page: 1, stopRequest: false, users: []});
        this.setState({initLoading: true});
        await this.getUsers()
        this.setState({initLoading: false});
    }

    getUsers = async () => {
        if (this.state.loading || this.state.stopRequest) return;
        this.setState({loading: true});
        try{
            const res = await axios.get(`${api}/users`, {
                params: {
                    page: this.state.page
                }
            })
            await this.setState({
                users: [...this.state.users, ...res.data.data], 
                loading: false, 
                page: this.state.page + 1,
                stopRequest: res.data.total == (this.state.users.length + res.data.data.length) ? true : false
            })
        } catch(err){
            this.setState({loading: true});
            this.props.openModal(err.message, 'error')
        }
    }

    renderFooter = () => {
        if (!this.state.loading || this.state.page == 1) return null;
        return (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        );
    }
    
    render(){
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
                        renderItem={({item}) => <UserCard {...item} selectUser={this.openUser}></UserCard>} 
                    />
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

export default connect(null, mapDispatchToProps) (Users)