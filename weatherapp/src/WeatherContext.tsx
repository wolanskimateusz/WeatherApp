import React, { useState, useEffect, useContext, ReactNode } from 'react';
import { WeatherData, getWeather } from './api';


const WeatherContext = React.createContext<WeatherData | null>(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

interface WeatherProviderProps {
    children: ReactNode
    search : string
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children, search }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getWeather(search);
                setWeatherData(data);
            } catch (err) {
                setError('Failed to fetch weather data');
            }
        };
        getData();
    }, [search]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <WeatherContext.Provider value={weatherData}>
            {children}
        </WeatherContext.Provider>
    );
};