const mostrarPersonaje = function (){
    let personaje = this.personaje;
    const molde = document.querySelector(".molde-detalle").cloneNode(true);
    molde.querySelector(".nombre-sa-personaje").innerText = personaje.name;
    molde.querySelector(".imagen-sa-personaje").src = personaje.image;

};

const cargaPersonaje = async function(){
    //llamar a la  API
   let res = await axios.get("https://www.breakingbadapi.com/api/characters");
   let personaje = res.data;
   const contenedor = document.querySelector("#contenedor-personaje");
   const molde = document.querySelector(".molde-personaje");
   personaje.forEach(p => {
       let copia = molde.cloneNode(true);
       copia.querySelector(".nombre-personaje").innerText = p.name;
       copia.querySelector(".imagen-personaje").src = p.img;
       copia.querySelector(".btn-ver-personaje")
       contenedor.appendChild(copia);
   });

   
};

document.addEventListener("DOMContentLoaded",()=>{
    //todo lo que ponga a qui se va a ejecutar cuando se carge la pagina
    cargaPersonaje();
});
