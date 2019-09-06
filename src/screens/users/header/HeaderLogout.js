import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './Style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Header = (props) => {
    return(
        <TouchableOpacity onPress={props.onLogout} style={styles.iconRightButton}>
            <Icon name="power-off" size={27} style={styles.iconRight}/>
        </TouchableOpacity>
    )
}