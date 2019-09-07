import { StyleSheet } from 'react-native'

var styles = StyleSheet.create({
	icone: {
		marginTop: 10,
		marginBottom: 10,
		textAlign: 'center'
	},
	message: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 10,
		marginHorizontal: 10
	},
	container: {
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	offsetHorizontal: {
		flex: 1,
	},
	body: {
		width: '90%',
		maxWidth: 400,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		borderRadius: 5
	},
	offset: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	button: {
		margin: 20,
		marginRight: 30,
		fontSize: 15
	},
	buttonChat: {
		color: '#03a9f4'
	},
	header: {
		textAlign: 'center',
		padding: 15,
		fontSize: 15,
	},
	input: {
		width: '90%',
		height: 40,
		marginTop: 10,
		marginLeft: 10,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#e3e3e3',
		borderRadius: 6
	},
	date: {
		fontSize: 20,
		marginLeft: 10,
		marginTop: 10,
		textAlign: 'center',
	}
})


export default styles