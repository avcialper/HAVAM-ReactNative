import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

// Npm packages
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'

// Custom components
import AnimationRenderer from '../../components/AnimationRenderer'
import SingleInformationCard from '../../components/cards/SingleInformationCard'
import HourlyWeather from '../../components/HourlyWeather'
import HourlyInformationCard from '../../components/cards/HourlyInformationCard'

// Functions
import { findDate, setSunset } from '../../utils/functions'
import { matchWeatherCode } from '../../utils/matchWeatherCodes/matchWeatherCodes'

// Style
import styles from './HomePage.style'

export default ({ handleColor, current, allDay, date }) => {

    const currentWeather = matchWeatherCode(current.condition.code, current.is_day)

    const renderHourlyWeatherCards = ({ item }) => <HourlyWeather data={item} />

    return (
        <LinearGradient colors={handleColor} style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.time} >{findDate(date)}</Text>
                <View style={styles.headContainer} >
                    <View style={styles.currentWeatherContainer} >
                        <AnimationRenderer path={currentWeather.path} />
                    </View>
                    <View style={styles.hourlyInfoArea} >
                        <View style={styles.maxMinContainer} >
                            <Text style={styles.maxMinValue} >{allDay.day.maxtemp_c}°C</Text>
                            <Icon name={'arrow-long-up'} color={'white'} style={{ opacity: 0.5, }} />
                            <Text style={styles.maxMinValue} > ● {allDay.day.mintemp_c}°C</Text>
                            <Icon name={'arrow-long-down'} color={'white'} style={{ opacity: 0.5, }} />
                        </View>
                        <View style={styles.temperatureArea} >
                            <Text style={styles.temperature} >{current.temp_c}</Text>
                            <Text style={styles.unit} >°C</Text>
                        </View>
                        <Text style={styles.feltTemperature} >Hissedilen  {current.feelslike_c}°</Text>
                        <Text style={styles.humidityAndUv} >Nem  %{current.humidity}</Text>
                        <Text style={styles.humidityAndUv} >UV indeksi  {current.uv}</Text>
                    </View>
                </View>
                <Text style={styles.currentWeatherTitle} >{currentWeather.weather}</Text>
                <SingleInformationCard
                    path={require('../../assets/animations/sunriseSunset.json')}
                    title={'Gün doğumu - Gün batımı'}
                    data={`${allDay.astro.sunrise.split(' ')[0]} - ${setSunset(allDay.astro.sunset)}`} />
                <FlatList
                    data={allDay.hour}
                    renderItem={renderHourlyWeatherCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <HourlyInformationCard
                    windRainHumidity={'wind'}
                    title={'Rüzgar'}
                    currentData={current.wind_kph}
                    deg={current.wind_degree}
                    allDay={allDay.hour} />
                <HourlyInformationCard
                    windRainHumidity={'rain'}
                    title={'Yağmur'}
                    currentData={allDay.day.daily_chance_of_rain}
                    allDay={allDay.hour}
                    hour={Number((current.last_updated).substr(11, 2))} />
                <HourlyInformationCard
                    windRainHumidity={'humidity'}
                    title={'Nem'}
                    currentData={current.humidity}
                    allDay={allDay.hour} />
            </ScrollView>
        </LinearGradient >
    )
}