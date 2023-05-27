import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 9,
        width: Dimensions.get('window').width / 4,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600'
    },
    image: {
        width: 30,
        height: 30,
        padding: 10,
    }
})