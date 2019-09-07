import { StyleSheet } from 'react-native'
import { colors } from '../../styles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
    loadingInit: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        marginTop: 10
    },
    list: {
        flex: 1,
        marginBottom: 10
    },
    containerHeader: {
        backgroundColor: colors.primary
    },
})

export default styles