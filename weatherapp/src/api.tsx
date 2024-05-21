import axios from "axios"

interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

interface Condition {
    text: string;
    icon: string;
    code: number;
}

interface Current {
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
}

interface ForecastDay {
    date: string;
    date_epoch: number;
    day: {
      maxtemp_c: number;
      maxtemp_f: number;
      mintemp_c: number;
      mintemp_f: number;
      avgtemp_c: number;
      avgtemp_f: number;
      maxwind_mph: number;
      maxwind_kph: number;
      totalprecip_mm: number;
      totalprecip_in: number;
      totalsnow_cm: number;
      avgvis_km: number;
      avgvis_miles: number;
      avghumidity: number;
      daily_will_it_rain: number;
      daily_chance_of_rain: number;
      daily_will_it_snow: number;
      daily_chance_of_snow: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
    };
    
  }

export interface WeatherData {
    location: Location;
    current: Current;
    forecast: {
        forecastday: ForecastDay[];
      };
}


export const getWeather = async  (location: string): Promise<WeatherData> => {
    try{
        const response = await axios.get<WeatherData>(
            `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=8&aqi=no&alerts=no`
        )
        return response.data
    } catch(error) {
        if(axios.isAxiosError(error)){
            console.log("Error message: ", error.message)
            throw new Error(error.message)
        }else {
            console.log("Unexpected error: ", error)
            throw new Error("Unexpeted error has occured")
        }
    }
}