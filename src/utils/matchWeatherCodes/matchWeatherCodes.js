import data from './weatherCods.json'

export function matchWeatherCode(code, isDay) {
    const currentWeather = data.filter((data) => data.code === code)
    if (currentWeather[0].animation === 'clearSky')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/clearSky.json') : require('../../assets/animations/night/clearSky.json')
        }
    else if (currentWeather[0].animation === 'cloudy')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/cloudy.json') : require('../../assets/animations/night/cloudy.json')
        }
    else if (currentWeather[0].animation === 'partlyCloudy')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/partlyCloudy.json') : require('../../assets/animations/night/partlyCloudy.json')
        }
    else if (currentWeather[0].animation === 'snow')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/snow.json') : require('../../assets/animations/night/snow.json')
        }
    else if (currentWeather[0].animation === 'mist')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/mist.json') : require('../../assets/animations/night/mist.json')
        }
    else if (currentWeather[0].animation === 'thunderstorm')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/thunderstorm.json') : require('../../assets/animations/night/thunderstorm.json')
        }
    else if (currentWeather[0].animation === 'rainShower')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/rainShowers.json') : require('../../assets/animations/night/rainShowers.json')
        }
    else if (currentWeather[0].animation === 'rain')
        return {
            weather: isDay ? currentWeather[0].dayText : currentWeather[0].nightText,
            path: isDay ? require('../../assets/animations/day/rain.json') : require('../../assets/animations/night/rain.json')
        }
}