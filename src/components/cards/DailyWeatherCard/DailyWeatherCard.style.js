import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: Dimensions.get('screen').height / 8.5,
        padding: 15
    },
    leftContainer: {
        flex: 0.45,
        justifyContent: 'center'
    },
    day: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    },
    weather: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black'
    },
    midContainer: {
        flex: 0.13,
        justifyContent: 'center'
    },
    rainPercent: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#25b7ac',
        fontSize: 15,
        fontWeight: '700'
    },
    animationContainer: {
        flex: 0.25
    },
    rightContainer: {
        flex: 0.17,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontWeight: '500'
    },
    flipContainer: {
        backgroundColor: '#8e8e8e',
        flexDirection: 'row',
        padding: 15
    },
    infoTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700'
    },
    dataContainer: {
        paddingLeft: 15
    },
    hourlyWeather: {
        backgroundColor: '#8e8e8e',
        height: 120
    }
})