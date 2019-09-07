import { StyleSheet } from 'react-native'
import { colors } from '../../styles';


const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.primary,
        elevation: 0,
        borderColor: colors.primary,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
    loadingInit: {
        flex: 1,
        alignItems: 'center',
        marginTop: 55
    },
    avatarContainer: {
        width: '100%',
        height: 200,
        backgroundColor: colors.primary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        elevation: 8,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    info: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default styles