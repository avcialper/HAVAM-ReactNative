import React from 'react'
import { View, Keyboard } from 'react-native'

// Npm packages
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env'

// Styles
import styles from './SearchBar.style'

export default ({ latLong, changeLocation, detectKeyboardOpen }) => {

    const [keyboardStatus, setKeyboardStatus] = React.useState('');

    React.useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            detectKeyboardOpen(true)
        });
        return () => {
            showSubscription.remove();
        };
    }, []);

    return (
        <View style={styles.container} >
            <GooglePlacesAutocomplete
                placeholder="Ara..."
                textInputProps={{ placeholderTextColor: 'black' }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    changeLocation(details.geometry.location.lat, details.geometry.location.lng)
                    detectKeyboardOpen(false)
                }}
                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'tr',
                    location: `${latLong[0]},${latLong[1]}`
                }}
                styles={{
                    container: styles.input,
                    textInput: styles.textInput,
                    listView: styles.listView,
                    description: styles.description
                }}
            />
        </View>
    )
}