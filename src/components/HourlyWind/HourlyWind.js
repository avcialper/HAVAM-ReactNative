import React from 'react'
import { View, Text, Image } from 'react-native'

// Styles
import styles from './HourlyWind.style'

export default ({ deg, hour, speed }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >{hour}</Text>
            <Image
                source={require('../../assets/wind.png')}
                style={[
                    styles.image,
                    { transform: [{ rotate: `${deg - 90}deg` }] }]} />
            <Text style={styles.text} >{speed} km/sa</Text>
        </View>
    )
}