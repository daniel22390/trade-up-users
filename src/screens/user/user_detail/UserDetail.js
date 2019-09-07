import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './Styles'

export default class UserDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <Text style={styles.value}>{this.props.value}</Text>
            </View>
        )
    }
}