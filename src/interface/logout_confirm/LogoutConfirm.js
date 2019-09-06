import React, { Component } from 'react'
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {closeConfirmation} from '../../store/actions/confirmation'
import {connect} from 'react-redux'
import styles from './Styles'

class LogoutConfirmation extends Component {

    confirm = () => {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('LoginRoute')
    }

  render(){
    return (
        <Modal
            onRequestClose={this.props.closeConfirmation}
            visible={this.props.open}
            animationType='fade' 
            transparent={true} 
        >
          <TouchableWithoutFeedback onPress={this.props.closeConfirmation}>
              <View style={styles.offset}></View>
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.props.closeConfirmation}>
                <View style={styles.offsetHorizontal}></View>
            </TouchableWithoutFeedback>
            <View style={styles.body}>
              
              <Icon name="exclamationcircleo" size={50} style={styles.icone} />
              <Text style={styles.message}>{"Você deseja sair da aplicação?"}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity onPress={this.props.closeConfirmation}>
                        <Text style={styles.button}>Não</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.confirm}>
                        <Text style={styles.button}>Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={this.props.closeConfirmation}>
                <View style={styles.offsetHorizontal}></View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={this.props.closeConfirmation}>
              <View style={styles.offset}></View>
          </TouchableWithoutFeedback>
        </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        closeConfirmation: () => dispatch(closeConfirmation())
    }
}

const mapStateToProps = ({confirmation}) => {
    return {
        msg: confirmation.msg,
        open: confirmation.open
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (LogoutConfirmation)
