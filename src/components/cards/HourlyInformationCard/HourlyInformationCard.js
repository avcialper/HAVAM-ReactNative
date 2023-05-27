import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

// Custom components
import AnimationRenderer from '../../AnimationRenderer'
import HourlyWind from '../../HourlyWind'
import HourlyRainAndHumidity from '../../HourlyRainAndHumidity'

// Styles
import styles from './HourlyInformationCard.style'

export default ({ windRainHumidity, title, currentData, direction = 0, deg, allDay, hour = 0 }) => {

    const renderHourlyWinds = ({ item }) =>
        <HourlyWind
            deg={item.wind_degree}
            hour={(item.time).split(' ')[1]}
            speed={item.wind_kph} />

    const renderHourlyRains = ({ item }) =>
        <HourlyRainAndHumidity
            hour={(item.time).split(' ')[1]}
            percent={item.chance_of_rain} />

    const renderHourlyHumidity = ({ item }) =>
        <HourlyRainAndHumidity
            hour={(item.time).split(' ')[1]}
            percent={item.humidity} />

    return (
        <View style={styles.container} >
            <View style={styles.upperContainer} >
                <Text style={styles.title} >{title}</Text>
                <View style={styles.upperInnerContainer} >
                    {windRainHumidity === 'wind' ?
                        <>
                            <Text style={styles.data} >{currentData} km/sa</Text>
                            <Image source={require('../../../assets/wind.png')} style={[styles.image, { transform: [{ rotate: `${deg - 90}deg` }] }]} />
                            <Text style={styles.data} >{direction}</Text>
                        </> :
                        windRainHumidity === 'rain' ?
                            <Text style={styles.data} >%{allDay[hour].chance_of_rain}</Text> :
                            <Text style={styles.data} >%{currentData}</Text>
                    }
                </View>
            </View>
            <View style={styles.bottomContainer} >
                <View style={styles.animationContainer} >
                    <AnimationRenderer path={
                        windRainHumidity === 'wind' ?
                            require('../../../assets/animations/wind.json') : windRainHumidity === 'rain' ?
                                require('../../../assets/animations/rain.json') : require('../../../assets/animations/humidity.json')} />
                </View>
                <FlatList
                    data={allDay}
                    renderItem={
                        windRainHumidity === 'wind' ?
                            renderHourlyWinds : windRainHumidity === 'rain' ?
                                renderHourlyRains : renderHourlyHumidity}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}
