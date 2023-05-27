import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginTop:5,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
    },
    textInput: {
        color: 'black',
        height: 40,
        marginTop: 10,
        paddingLeft: 5,
    },
    listView: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginHorizontal: 10,
    },
    description: {
        color: 'black'
    }
})