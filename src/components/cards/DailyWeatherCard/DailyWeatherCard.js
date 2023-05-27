import React from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'

// Custom components
import AnimationRenderer from '../../../components/AnimationRenderer'
import HourlyWeather from '../../HourlyWeather'

// Functions
import { findDayName, setSunset, avgWind } from '../../../utils/functions'
import { matchWeatherCode } from '../../../utils/matchWeatherCodes/matchWeatherCodes'

// Styles
import styles from './DailyWeatherCard.style'

export default ({ date, dailyWeather }) => {

    const [showDetail, setShowDetail] = React.useState(false)

    const dayName = findDayName(date)
    const dayInformaion = matchWeatherCode(dailyWeather.day.condition.code, 1)
    const allDay = dailyWeather.day
    const willItRain = allDay.daily_will_it_rain ? true : false

    const changeVisible = () => setShowDetail(!showDetail)

    const renderWeatherCards = ({ item }) => <HourlyWeather data={item} small={true} />

    return (
        <View>
            <Pressable onPress={changeVisible} style={styles.container}  >
                <View style={styles.leftContainer} >
                    <Text style={styles.day} >{dayName}</Text>
                    <Text style={styles.weather} >{dayInformaion.weather}</Text>
                </View>
                <View style={styles.midContainer} >
                    {willItRain && <Text style={styles.rainPercent} >%{dailyWeather.day.daily_chance_of_rain}</Text>}
                </View>
                <View style={styles.animationContainer} >
                    <AnimationRenderer path={dayInformaion.path} />
                </View>
                <View style={styles.rightContainer} >
                    <Text style={styles.title} >{allDay.maxtemp_c}°C</Text>
                    <Text style={styles.title} >{allDay.mintemp_c}°C</Text>
                </View>
            </Pressable>
            {
                showDetail &&
                <View>
                    <Pressable onPress={changeVisible} style={styles.flipContainer}>
                        <View>
                            <Text style={styles.infoTitle} >Rüzgar</Text>
                            <Text style={styles.infoTitle} >Nem</Text>
                            <Text style={styles.infoTitle} >Gün doğumu - Gün batımı</Text>
                            <Text style={styles.infoTitle} >UV indeksi</Text>
                        </View>
                        <View style={styles.dataContainer} >
                            <Text style={styles.infoTitle} >{avgWind(dailyWeather.hour)} km/sa</Text>
                            <Text style={styles.infoTitle} >%{allDay.avghumidity}</Text>
                            <Text style={styles.infoTitle} >{(dailyWeather.astro.sunrise).split(' ')[0]} - {setSunset(dailyWeather.astro.sunset)}</Text>
                            <Text style={styles.infoTitle} >{allDay.uv}</Text>
                        </View>
                    </Pressable>
                    <FlatList data={dailyWeather.hour} renderItem={renderWeatherCards} horizontal={true} style={styles.hourlyWeather} />
                </View>
            }
        </View>
    )
}