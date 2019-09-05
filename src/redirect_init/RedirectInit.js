import React, {Component} from 'react'
import {
    View,
    AsyncStorage,
    Image
} from 'react-native'
import styles from './Styles'
import logo from '../../assets/tradeup-icon.png'

class RedirectInit extends Component {

    constructor() {
      super();
      this.verifyToken();
    }
  
    verifyToken = async () => {
      const userToken = await AsyncStorage.getItem('token');
      this.props.navigation.navigate(userToken ? 'UsersRoute' : 'LoginRoute');
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Image source={logo}></Image>
        </View>
      );
    }
}

export default RedirectInit