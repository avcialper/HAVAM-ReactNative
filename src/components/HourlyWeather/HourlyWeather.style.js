import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        normal: {
            paddingTop: 15,
            width: Dimensions.get('screen').width / 5,
            height: Dimensions.get('screen').height / 4
        },
        small: {
            width: Dimensions.get('screen').width / 7,
            height: Dimensions.get('screen').height / 8
        }
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    animationContainer: {
        normal: {
            width: Dimensions.get('screen').width / 5,
            height: Dimensions.get('screen').height / 10
        },
        small: {
            width: Dimensions.get('screen').width / 7,
            height: Dimensions.get('screen').height / 10
        }
    },
})