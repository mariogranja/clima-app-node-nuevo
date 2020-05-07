const axios = require('axios');


const getLugarLonLtd = async (direccion) => {
    const encodedUrl = encodeURI(direccion);
    console.log(encodedUrl);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': 'c365ea3e6bmshede766c8ee87b14p176ac7jsne2bd4fbc397f'}
      });
    
    const resp = await instance.get();
      if( resp.data.Results.length === 0 ){
          throw new Error(`No existe informacion para la direccion: ${direccion}`);
      }
          let data = resp.data.Results[0];
          let dir =  data.name;
          let longitud = data.lon;
          let latitud = data.lat;
      

      return  {
        dir,
        longitud,
        latitud
      }
}


module.exports = {
    getLugarLonLtd
}

