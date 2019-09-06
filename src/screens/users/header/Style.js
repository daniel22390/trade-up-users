import {StyleSheet} from 'react-native'
import { colors } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    iconRightButton: {
        height: '100%',
        flexDirection: "column",
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    iconRight: {
        color: "#fff"
    }
})

export default styles