import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(225, 225, 225, 0.7)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 9,
        flexDirection: 'row',
        marginVertical: 48
    },
    animationContainer: {
        width: Dimensions.get('window').width / 3
    },
    textArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center'
    }
})