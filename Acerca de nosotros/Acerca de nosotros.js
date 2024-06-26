const celular = { 
    modelo : "Iphone 30SUltraMax",
    numSerie : "A1266830" ,
    IMEI: "HTY89910",
    color: "blanco",
    memoriaRamGb : 1024,
    memoriaInternaGb: 3000,
    precio: 100000,
    pantallaInch: 22 
};

console.log (celular);
// Leer el IMEI del celular
console.log(celular.IMEI);
console.log(celular["IMEI"]);

// Leer el atributo color
console.log(celular.color);
// Modificar el atributo precio a $35000 e imprimir
celular.precio = 35000;
console.log(celular.precio);

// que realizarias para almacenar varios objetos de celulares

const celulares = [   celular   ];

celulares.push(  { 
    propietario : "Mariana",
    modelo : "Iphone 12",
    numSerie : "A000012" ,
    IMEI: "HTY877777",
    color: "Morado",
    memoriaRamGb : 16,
    memoriaInternaGb: 250,
    precio: 230000,
    pantallaInch: 12 
}  );

// Agregar 2 celulares más
celulares.push( {  
    propietario: "Marbe",
    modelo : "W1000",
    numSerie : "A888321" ,
    IMEI: "NoLoRobe",
    color: "Azul",
    memoriaRamGb : 32,
    memoriaInternaGb: 128 ,
    precio: 15000,
    pantallaInch: 14, 
} );

celulares.push({
    propietario: "Susy",
    modelo : "SamsungGalaxyS24Ultra",
    numSerie : "A1266831",
    IMEI : "HTY89911",
    color : "Rosa",
    memoriaRamGb : 32,
    memoriaInternaGb : 1024,
    precio : 30000,
    pantallaInch : 7
});

celulares.push(  { 
    propietario: "Jaqui",
    modelo : "Iphone 2A2",
    numSerie : "A1264545" ,
    IMEI: "HTUI09090",
    color: "negro",
    memoriaRamGb : 8,
    memoriaInternaGb: 500,
    precio: 20000,
    pantallaInch: 32 
}  );

console.log(celulares);

// mostrar la persona propietaria y el modelo de su celular

for (let i = 0; i < celulares.length; i++) {
    const element = celulares[i];
    console.log( element.propietario, element.modelo );

}

const crearTarjeta = (number) => {
    return `
        <div class="card col-4">
            <img src="./public/img/celular.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${number.modelo}
                </h5>
                <p class="card-text">${number.propietario}
                </p>
                <a href="${number.precio}"  class="btn btn-primary">${number.color}
                </a>
            </div>
        </div>`
}


const crearArregloTarjetas = ( celulares ) => {
    let arregloFinalTarjetas = "";
    for (let i = 0; i< celulares.length; i++){
        arregloFinalTarjetas = arregloFinalTarjetas + crearTarjeta(celulares[i]);
    }
    console.log(arregloFinalTarjetas);
    return arregloFinalTarjetas;
};


arregloTarjetas.innerHTML = crearArregloTarjetas(celulares);


/*
    Realizar un prog en JavaScript que realice el conteo 
    regresivo (descendente) del 10 al 1, y que imprima en consola
    solo los numeros pares

*/

// ===============  Insertar tarjetas con MAP ===========================
const buttonSection = document.getElementById("arreglo-botones");
const insertCards = ( electrolitos ) =>{
    const cards = electrolitos.map(  element => `
        <div class = "col-lg-4 col-md-6 col-sm-10">
            <div class="card">
                <div class="card-body">
                    Toma ${element}.
                </div>
            </div>
        </div>
        `     );
    return cards;
}
buttonSection.innerHTML = insertCards( ["Electrolic", "Pedialit", "Electrolife"] );
