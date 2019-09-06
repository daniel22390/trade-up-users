import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import styles from './Style'

export default class UserCard extends Component{
    componentDidMount(){
    }

    render(){
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.5}>
               <View style={styles.leftInfo}>
                    <Image source={{uri: this.props.avatar}} style={styles.image}></Image>
                </View> 
                <View style={styles.rightInfo}>
                    <Text style={styles.name}>
                        {`${this.props.first_name} ${this.props.last_name}`}
                    </Text>
                    <Text style={styles.email}>
                        {this.props.email}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}