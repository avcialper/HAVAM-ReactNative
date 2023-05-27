import React from 'react'
import { View, Text } from 'react-native'

// Custom components
import AnimationRenderer from '../../AnimationRenderer'

// Styles
import styles from './SingleInformationCard.style'

export default ({ path, title, data }) => {
    return (
        <View style={styles.container} >
            <View style={styles.textArea} >
                <Text style={styles.text} >{title}</Text>
                <Text style={styles.text} >{data}</Text>
            </View>
            <View style={styles.animationContainer} >
                <AnimationRenderer path={path} />
            </View>
        </View>
    )
}