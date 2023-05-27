import React from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './HourlyRainHumidity.style'

export default ({ hour, percent }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >{hour}</Text>
            <Text style={styles.text} >%{percent}</Text>
        </View>
    )
}