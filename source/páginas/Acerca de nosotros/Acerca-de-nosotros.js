/* Tarjetas de presentacion */
const integrante = { 
    nombre : " Alejandra Alvarado Contreras ",
    rol : "Desarrollador Java FullStack" ,
    frase: " \" El autoconocimiento, la gestión emocional y el aprendizaje continuo conducen al inevitable estado de ser tú mismo y a la construcción de tu propio destino \"🌱💫 Ale Alvarado",
    linkedin: "https://www.linkedin.com/in/alejandra-alvarado-003681191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/AlejandraAC",
    correo: "ale.alvarado.contreras@gmail.com",
    image:  "./img/Ale.jpg",
};

const integrantes = [   integrante   ];

integrantes.push(  { 
    nombre : " Jhorleny Arrellano Chávez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" Cree en ti, esfuérzate y hazlo posible \" ",
    linkedin: "https://www.linkedin.com/in/jhorleny-arellano/",
    github: "https://github.com/Jhorchss",
    correo: "jhorleny.business@gmail.com",
    image: "./img/Jhor.jpg", 
}  );

integrantes.push(  { 
    nombre : " Neri Armijo Miranda ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" El éxito es la suma de pequeños esfuerzos repetidos día tras día \" - Robert Collier  ",
    linkedin: "https://www.linkedin.com/in/neri-armijo-miranda-821318195/",
    github: "https://github.com/NeriArmijoMiranda",
    correo: "neriarmijomiranda530@gmail.com", 
    image: "./img/Neri.jpg",
}  );

integrantes.push(  { 
    nombre : " Marbella Magaly Cabrera Durán ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante \" - Albert Einstein", 
    linkedin: "https://www.linkedin.com/in/marbella-magaly-cabrera-dur%C3%A1n-649584278/",
    github: "https://github.com/marbellacabrera",
    correo: "marbecduran@gmail.com",
    image: "./img/Mar.jpg",
}  );

integrantes.push(  { 
    nombre : " Jazmín Guadalupe Cruz Ibarra ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" Entre más fuerte trabajes, más complicado será que te des por vencido \" - Vincent Lombardi", 
    linkedin: "https://www.linkedin.com/in/jazm%C3%ADn-cruz-857383241/",
    github: "https://github.com/JazzCI",
    correo: "jazzpchan.93@gmail.com",
    image: "./img/Jazz.jpg",
}  );

integrantes.push(  { 
    nombre : " Desire Guadalupe García Yañez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" Puede que el camino sea duro y atravieses por procesos en los que no sepas cómo salir. Pero no tengas miedo porque estoy contigo cada día de tu vida \" - Isaías 41:10 ", 
    linkedin: "https://www.linkedin.com/in/desire-garcia-ya%C3%B1ez-282b29181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/dessgrc1609",
    correo: "desiregrc@gmail.com",
    image: "./img/Dess.jpg",
}  );

integrantes.push(  { 
    nombre : " Ivonne Abigail Mendoza Cervantes ",
    rol : " Desarrollador Java FullStack " ,
    frase: " \" ¡No te rindas, no debes sentirte avergonzado por caer! ¡La verdadera vergüenza está en no volver a levantarse! \" - Shintaro Midorima ",
    linkedin: "https://www.linkedin.com/in/ivonne-abigail-mendoza-cervantes-00770b312/",
    github: "https://github.com/EusbekMendoza?tab=repositories",
    correo: "abhyinfinito@hotmail.com", 
    image: "./img/Mendoza.jpg",
}  );

integrantes.push(  { 
    nombre : " Jessica Arlette Miranda Chávez ",
    rol : " Desarrollador Java FullStack " ,
    frase: "\" El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito \" - Albert Schweitzer ", 
    linkedin: "https://www.linkedin.com/in/arlette-miranda/",
    github: " https://github.com/Arlette-Miranda",
    correo: "arlettemirandac@gmail.com",
    image: "./img/Arle.jpg",
}  );

const crearTarjeta = (etiqueta) => {        
    return `
        <div class="card text-center offset-1 col-6 col-sm-5 col-md-2 my-2" >
            <h5 class="card-title">${etiqueta.nombre}</h5>
            <img src="${etiqueta.image}" height="190" border= 12% class="card-img-top" alt="...">
            <div class="card-body"> 
                <h5 class="card-title">${etiqueta.rol}</h5>
                <p class="card-text">${etiqueta.frase}
                </p>
            </div>
            <div class="card-body">
                <a href="${etiqueta.linkedin}"  class="btn btn-outline-info">
                <i class="bi bi-linkedin"></i>
                </a>
                <a href="${etiqueta.github}"  class="btn btn-dark">
                <i class="bi bi-github"></i>
                </a>
                <a href="${etiqueta.correo}"  class="btn btn-danger">
                <i class="bi bi-envelope-at"></i>
                </a>
            </div>
        </div>`
}


const crearArregloTarjetas = ( integrantes ) => {
    let arregloFinalTarjetas = "";
    for (let i = 0; i< integrantes.length; i++){
        arregloFinalTarjetas = arregloFinalTarjetas + crearTarjeta(integrantes[i]);
    }
    console.log(arregloFinalTarjetas);
    return arregloFinalTarjetas;
};


arregloTarjetas.innerHTML = crearArregloTarjetas(integrantes);
