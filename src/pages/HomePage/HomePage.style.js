import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    page: {
        flex: 1,
    },
    time: {
        fontSize: 25,
        padding: 15,
        color: 'white'
    },
    headContainer: {
        marginTop: -60,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    currentWeatherContainer: {
        backgroundColor: 'tranparent',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 3,
    },
    currentWeatherTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -20
    },
    hourlyInfoArea: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    maxMinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    maxMinValue: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    temperatureArea: {
        flexDirection: 'row',
    },
    temperature: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white'
    },
    unit: {
        paddingTop: 15,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    feltTemperature: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    humidityAndUv: {
        fontSize: 15,
        fontWeight: '500',
        color: 'rgba(225, 225, 225, 0.7)'
    },
    midContainer: {
        height: Dimensions.get('window').height / 4,
    },
    innerMidContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    }
})