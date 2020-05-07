//Aqui van los requires de los paquetes de Node que vamos a utilizar
const {getLugarLonLtd} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');
const argv = require('yargs').options({
    direccion : {
        alias: 'd',
        desc: 'Ciudad para recuperar el clima',
        demand: true
    }
}).argv;

// getLugarLonLtd(argv.direccion).then((resp)=>{
//     console.log(resp);
//     getClima(resp.longitud, resp.latitud).then(clima =>{
//         console.log(`El clima de ${resp.dir} es de ${clima} grados centigrados`);
//     }).catch(console.log)
// }).catch((err)=>{
//     console.log(err);
// });

let getInfo = async(direccion) =>{
    try {
        let lonLat = await getLugarLonLtd(direccion);
        let clima = await getClima(lonLat.longitud, lonLat.latitud);
        return clima;
    }catch(err){
        throw new Error (`No se encontro el clima para esas coordenadas`);
    }

}


getInfo(argv.direccion).then(resp=>{
    console.log(`El clima de ${argv.direccion} es de ${resp} grados centigrados`);
}).catch(err=>console.log)


