import React from 'react'
import { View, FlatList } from 'react-native'

// Custom components
import DailyWeatherCard from '../../components/cards/DailyWeatherCard'

// Styles
import styles from './WeeklyPage.syle'

export default ({ allDays }) => {

    const renderDailyWeather = ({ item }) =>
        <DailyWeatherCard
            date={item.date}
            dailyWeather={item}
        />

    return (
        <FlatList
            data={allDays}
            renderItem={renderDailyWeather}
            ItemSeparatorComponent={<View style={styles.separator} ></View>}
        />
    )
}