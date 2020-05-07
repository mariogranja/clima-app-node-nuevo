const axios = require('axios');


let getClima = async (lon, lat) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=778c662bbffddfa145f93763cf9f3395&units=metric`);
    return resp.data.main.temp;
}



module.exports = {
    getClima
}