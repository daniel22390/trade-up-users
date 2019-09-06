import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 3,
        backgroundColor: '#fff',
        padding: 15,
        flex: 1,
        flexDirection: 'row'
    },
    leftInfo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 35
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    email: {
        color: '#666'
    }
})

export default styles