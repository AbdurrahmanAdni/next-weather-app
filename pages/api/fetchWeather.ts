import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_KEY = 'f33a484cf794d08d0148764789aaba32';

const fetchWeather = async (query : string) => {
    // const { data }  = await axios.get(URL, {
    //     params : {
    //         q: query,
    //         units : 'metric',
    //         APPID : APP_KEY,
    //     }
    // })

    const data  = await axios.get(URL, {
        params : {
            q: query,
            units : 'metric',
            APPID : APP_KEY,
        }
    })

    return data;

    // if (data.status === 200){
    //     return data
    // } else {
    //     return "Error"
    // }

    // return data;

    // await axios.get(URL, {
    //     params : {
    //         q: query,
    //         units : 'metric',
    //         APPID : APP_KEY,
    //     }
    // }).then((response) => {
    //     console.log(response.data);
    // }).catch((error) => {
    //     console.log(error);
    // })
}

export default fetchWeather;