import React from 'react'
import { View, Text } from 'react-native'

// Custom components
import AnimationRenderer from '../../components/AnimationRenderer'

// Syles
import styles from './SplashScreen.style'

export default ({ loadingError }) => {
    return (
        <View style={styles.container} >
            {loadingError === 'loading' ?
                <>
                    <AnimationRenderer path={require('../../assets/animations/loading.json')} />
                    <Text style={styles.owner} >/avcialper</Text>
                </> :
                <>
                    <AnimationRenderer path={require('../../assets/animations/error.json')} color={true} />
                    <Text style={styles.owner} >HATA</Text>
                </>
            }
        </View>
    )
}