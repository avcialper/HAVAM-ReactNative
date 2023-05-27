import React from 'react'

// Npm packages
import LottieView from 'lottie-react-native'

export default ({ path }) => {
    return (
        <LottieView
            source={path}
            autoPlay={true}
        />
    )
}