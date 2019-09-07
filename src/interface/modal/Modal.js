import React, { Component } from 'react'
import {
    Text,
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { closeModal } from '../../store/actions/modal'
import { connect } from 'react-redux'
import styles from './Styles'

class ModalAlert extends Component {

    render() {

        let cor, icone;
        if (this.props.type === 'error') {
            cor = '#f27474'
            icone = 'closecircleo'
        }
        else if (this.props.type === 'success') {
            cor = '#a5dc86'
            icone = 'check'
        }
        return (
            <Modal
                onRequestClose={this.props.closeModal}
                visible={this.props.open}
                animationType='fade'
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.props.closeModal}>
                        <View style={styles.offsetHorizontal}></View>
                    </TouchableWithoutFeedback>
                    <View style={styles.body}>

                        <Icon name={icone} size={50} style={[{ color: cor }, styles.icone]} />
                        <Text style={styles.message}>{this.props.msg}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <TouchableOpacity onPress={this.props.closeModal}>
                                <Text style={styles.button}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={this.props.closeModal}>
                        <View style={styles.offsetHorizontal}></View>
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

const mapStateToProps = ({ modal }) => {
    return {
        msg: modal.msg,
        type: modal.type,
        open: modal.open
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAlert)
