import { useState, useEffect } from 'react'

// Npm packages
import axios from 'axios'

export default (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async (url) => {
        try {
            const { data: weatherData } = await axios.get(url)
            setData(weatherData)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return { data, loading, error }
}
