import React, { Component } from 'react'
import {
    View,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    TextInput,
    AsyncStorage
} from 'react-native'
import backgroundImage from '../../../assets/background.jpg'
import vetor from '../../../assets/tradeup-icon.png'
import styles from './Styles'
import Button from '../../interface/button/Button'
import { openModal } from '../../store/actions/modal'
import { connect } from 'react-redux'
import axios from 'axios'
import { api } from '../../Common'

class Login extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }

    signin = async () => {
        if (this.validateSignIn())
            await this.requestSignIn()
    }

    requestSignIn = async () => {
        this.setState({ loading: true })
        try {
            const res = await axios.post(`${api}/login`, {
                email: this.state.email,
                password: this.state.password
            })
            AsyncStorage.setItem('token', res.data.token);
            this.setState({ loading: false })
            this.props.navigation.navigate('UsersRoute')
        } catch (err) {
            this.props.openModal(err.message, 'error')
            this.setState({ loading: false })
        }
    }

    validateSignIn = () => {
        let validations = []
        validations.push({ valid: this.state.email && this.state.email != "", msg: "O campo email é obrigatório!" })
        validations.push({ valid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email), msg: "O campo email é inválido!" })
        validations.push({ valid: this.state.password && this.state.password != "", msg: "O campo senha é obrigatório!" })

        let msg = ""
        let valid = true

        for (i = 0; i < validations.length; i++) {
            if (!validations[i].valid) {
                valid = false
                msg = validations[i].msg
                break
            }
        }

        if (!valid) {
            this.props.openModal(msg, 'error')
        }
        return valid
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled>
                    <Image source={vetor} />
                    <View style={styles.inputs}>
                        <TextInput
                            icon='at'
                            placeholder='Email'
                            returnKeyType="next"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCompleteType="email"
                            autoCapitalize="none"
                            style={styles.input}
                            value={this.state.email}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                this.passwordInput.focus();
                            }}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput
                            icon='lock'
                            secureTextEntry={true}
                            returnKeyType="next"
                            autoCapitalize="none"
                            placeholder='Senha'
                            style={styles.input}
                            value={this.state.password}
                            onSubmitEditing={() => this.signin()}
                            onChangeText={password => this.setState({ password })}
                            ref={(input) => { this.passwordInput = input; }}
                        />
                        {this.state.loading ?
                            <Button
                                loading={true}
                                styleWrapper={styles.button}
                            />
                            :
                            <Button
                                onPress={this.signin}
                                title={'Entrar'}
                                styleWrapper={styles.button}
                            />
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (msg, type) => dispatch(openModal(msg, type))
    }
}

export default connect(null, mapDispatchToProps)(Login)


