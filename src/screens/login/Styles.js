import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        padding: 20,
        width: '90%',
        alignItems: 'center',
        maxWidth: 500
    },
    inputs: {
        paddingTop: 15,
        width: '100%',
        flexDirection: "column",
        alignItems: 'center'
    },
    button: {
        marginTop: 15,
        width: '80%',
        marginBottom: 50
    },
    textbutton: {
        fontSize: 20
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        paddingLeft: 20
    }
})

export default styles