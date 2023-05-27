import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(225, 225, 225, 1)',
        height: Dimensions.get('screen').height / 5.5,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    upperInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: '500',
    },
    data: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 20
    },
    image: {
        width: 20,
        height: 20,
        padding: 10
    },
    bottomContainer: {
        flexDirection: 'row'
    },
    animationContainer: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 7
    }
})