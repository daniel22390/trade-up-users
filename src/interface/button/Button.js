import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import { colors } from '../../styles'
import styles from './Styles'

export default function Button(props) {
    return (
        <TouchableOpacity style={props.styleWrapper} onPress={props.onPress}>
            <View style={[
                styles.container,
                { backgroundColor: props.color ? props.color : colors.primary },
                props.styleContainer
            ]}>
                {
                    props.loading ?
                        <ActivityIndicator style={styles.spinner} size="small" color="#fff" />
                        :
                        <Text style={[{ color: props.colorText ? props.colorText : "white" }, styles.text]}>{props.title}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

