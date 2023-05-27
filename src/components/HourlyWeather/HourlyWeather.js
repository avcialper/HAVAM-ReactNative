import React from 'react'
import { View, Text } from 'react-native'

// Custom components
import AnimationRenderer from '../AnimationRenderer'

// Functions
import { matchWeatherCode } from '../../utils/matchWeatherCodes/matchWeatherCodes'

// Styles
import styles from './HourlyWeather.style'

export default ({ data, small = false }) => {

    const values = matchWeatherCode(data.condition.code, data.is_day)

    return (
        <View style={[small ? styles.container.small : styles.container.normal]} >
            <View>
                <Text style={styles.text} >{(data.time).split(' ')[1]}</Text>
                <Text style={styles.text} >{data.temp_c}°</Text>
            </View>
            <View style={[small ? styles.animationContainer.small : styles.animationContainer.normal]} >
                <AnimationRenderer path={values?.path} />
            </View>
            {!small && <Text style={styles.text} >{values?.weather}</Text>}
        </View>
    )
}