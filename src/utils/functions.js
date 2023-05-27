import colors from "./colors"
import gradientColors from "./gradientColors"
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service'


export function findDate(data) {
    var hours = (data.split(' ')[1]).split(':')[0]
    var minutes = (data.split(' ')[1]).split(':')[1]
    if (hours < 10) hours = `0${hours}`
    const date = (data.split(' ')[0]).split('-')[2]
    const month = (data.split(' ')[0]).split('-')[1]
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    return `${date} ${months[month - 1]}, ${hours}:${minutes}`
}

export function setSunset(hour) {
    return (Number(hour.substr(1, 1)) + 12) + hour.substr(2, 3)
}

export function findDayName(date) {
    var dayObj = new Date(date)
    var dayOfWeek = dayObj.getDay()
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    return days[dayOfWeek]
}

export function avgWind(data) {
    var sum = 0
    for (var i = 0; i < data.length; i++)
        sum += Number(data[i].wind_kph)
    return (sum / 24).toFixed(1)
}

export function setTheme(sunrise, sunset, currentHour) {
    if (currentHour >= sunrise && currentHour < sunrise + 4)
        return [colors.morning, gradientColors.morning]
    else if ((currentHour >= sunrise + 4 && currentHour < 12) || (currentHour >= 14 && currentHour < sunset - 3))
        return [colors.day, gradientColors.day]
    else if (currentHour >= 12 && currentHour < 14)
        return [colors.noon, gradientColors.noon]
    else if (currentHour >= sunset - 3 && currentHour < sunset)
        return [colors.afternoon, gradientColors.afternoon]
    else if (currentHour >= sunset && currentHour < sunset + 3)
        return [colors.evening, gradientColors.evening]
    else
        return [colors.night, gradientColors.night]
}

export async function requestLocationPermission() {
    return new Promise((resolve, reject) => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Konum İzini",
                message: "Konum paylaşım izni verilsin mi?",
                buttonNeutral: "Daha Sonra Sor",
                buttonNegative: "Hayır",
                buttonPositive: "Evet"
            }
        )
            .then(granted => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords
                            resolve([latitude, longitude])
                        },
                        error => {
                            console.log("Error getting location")
                            reject(error)
                        }
                    );
                } else {
                    console.log("Location permission denied")
                    reject(new Error("Location permission denied"))
                }
            })
            .catch(error => {
                console.warn(error)
                reject(error)
            })
    })
}