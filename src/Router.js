import React from 'react'
import { PermissionsAndroid, Pressable, Keyboard } from 'react-native'

// Navigation components
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Pages
import HomePage from './pages/HomePage'
import WeeklyPage from './pages/WeeklyPage'
import SplashScreen from './pages/SplashScreen'

// Custom components
import SearchBar from './components/SearchBar'

// Fetch data
import { API_HEAD, API_TAIL } from '@env'
import useFetch from './hooks/useFetch'

// Functions
import { setTheme, requestLocationPermission } from './utils/functions'

const Tab = createMaterialTopTabNavigator()

export default () => {

  const [latLong, setLatLong] = React.useState([36.892845, 30.702718])
  const [search, setSearch] = React.useState(false)

  const handleSearch = (bool) => setSearch(bool)

  const changeLocation = (lat, long) => setLatLong([lat, long])

  React.useEffect(() => {
    const getLocation = async () => {
      const location = await requestLocationPermission()
      setLatLong(location)
    }
    getLocation()
  }, [])

  const { data, loading, error } = useFetch(API_HEAD + `${latLong[0]},${latLong[1]}` + API_TAIL)

  if (loading) return <SplashScreen loadingError={'loading'} />
  if (error) return <SplashScreen loadingError={'error'} />

  const { sunrise, sunset } = data.forecast.forecastday[0].astro

  const theme = setTheme(
    Number((sunrise).substr(0, 2)),
    Number((sunset).substr(0, 2)) + 12,
    Number((data.location.localtime).substr(11, 2))
  )

  return (
    <NavigationContainer theme={{ colors: { card: theme[0], primary: 'white', text: 'white' } }}>
      <Pressable
        style={[{ backgroundColor: theme[0] }, search && { height: '100%' }]}
        onPress={() => {
          handleSearch(false)
          Keyboard.dismiss()
        }} >
        <SearchBar latLong={latLong} changeLocation={changeLocation} detectKeyboardOpen={handleSearch} />
      </Pressable>
      <Tab.Navigator screenOptions={{ swipeEnabled: false }} >
        <Tab.Screen
          name='HomePage'
          options={{ title: 'Bugün' }}>
          {() => <HomePage
            handleColor={theme[1]}
            current={data.current}
            allDay={data.forecast.forecastday[0]}
            date={data.location.localtime}
          />}
        </Tab.Screen>
        <Tab.Screen
          name='WeeklyPage'
          options={{ title: 'Haftalık' }}>
          {() => <WeeklyPage allDays={(data.forecast.forecastday).slice(1)} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}