document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});
/*
ScrollReveal().reveal("#home");
ScrollReveal().reveal("#intro", { delay: 600 });
ScrollReveal().reveal(".features-card", { delay: 500 });
ScrollReveal().reveal(".contact-details", { delay: 500 });
*/
/********************************************
JS Cursor-Custom
*********************************************/

var cursorinner = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursorinner.classList.add("cursorinnerhover");
});
document.addEventListener("mouseup", function () {
  cursorinner.classList.remove("cursorinnerhover");
});

let mjson = {
  directora: {
    nombre: "Silvina Rueda",
    apellido: "de Urganda",
    rol: "Directora de Pescar",
    linkedin:
      "https://www.linkedin.com/in/silvia-uranga-1056675/?originalSubdomain=ar",
  },

  directivos: [
    {
      nombre: "Marie",
      apellido: "Steverlynck",
      rol: "Coordinación de programas y RR. II.",
      linkedin:
        "https://www.linkedin.com/in/marie-steverlynck-97a42b194/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=ar",
    },
    {
      nombre: "Carolina",
      apellido: "Bianchetti",
      rol: "Responsable de intermediación laboral y red de egresados",
      linkedin:
        "https://www.linkedin.com/in/carolina-bianchetti-88745a70/?originalSubdomain=ar",
    },
    {
      nombre: "Florencia",
      apellido: "Cocorullo",
      rol: "Coordinación de programas y Líder de Capacitación",
      linkedin:
        "https://www.linkedin.com/in/florencia-cocorullo-8086ab92/?originalSubdomain=ar",
    },
  ],

  orientadora: [
    {
    nombre: "Paola",
    apellido: "Trippichio",
    rol: "Orientadora del equipo",
    linkedin:
      "https://www.linkedin.com/in/paola-tripicchio-2bb59122/?originalSubdomain=ar",
  },
  ],
  alumnos: [
    {
      nombre: "Emanuel",
      apellido: "Alderete",
      github: "https://github.com/EmanuelAl",
      linkedin: "https://www.linkedin.com/in/emanuel-alderete/",
    },
    {
      nombre: "Hernan",
      apellido: "Balderrama",
      github: "https://github.com/HernanJBalderrama",
      linkedin: "https://www.linkedin.com/in/hernanjbalderrama/",
    },
    {
      nombre: "María Eva Medina",
      apellido: "Balderrama",
      github: "https://github.com/EvaMedina",
      linkedin: "https://www.linkedin.com/in/mariaevamedinabalderrama/",
    },
    {
      nombre: "Florencia",
      apellido: "Bascaran",
      github: "https://github.com/Florencia-Bascaran",
      linkedin: "no-tiene",
    },
    {
      nombre: "Nayla",
      apellido: "Bechara",
      github: "http://github.com/naylabechara",
      linkedin: "https://www.linkedin.com/in/nayla-bechara/",
    },
    {
      nombre: "Mauro",
      apellido: "Benitez",
      github: "https://github.com/Pandiimau",
      linkedin: "https://www.linkedin.com/in/mauroebenitez/",
    },
    {
      nombre: "Laura",
      apellido: "Calzadilla",
      github: "https://github.com/LauraVictoriaC",
      linkedin: "https://www.linkedin.com/in/laura-calzadilla",
    },
    {
      nombre: "Iván Gabriel",
      apellido: "Caravajal",
      github: "https://github.com/IvanGCGH",
      linkedin: "https://www.linkedin.com/in/ivan-gabriel-caravajal",
    },
    {
      nombre: "Celina",
      apellido: "Chiappa",
      github: "https://github.com/celinachiappa",
      linkedin: "no-tiene",
    },
    {
      nombre: "Michelle",
      apellido: "Escalante",
      github: "https://github.com/EscalanteMichelle",
      linkedin: "https://www.linkedin.com/in/michelle-mel-escalante/",
    },
    {
      nombre: "Angelica",
      apellido: "Garay",
      github: "https://github.com/angiecreators",
      linkedin: "https://www.linkedin.com/in/angiegaray/",
    },
    {
      nombre: "Maira",
      apellido: "Gomez",
      github: "https://github.com/MairaAnabella",
      linkedin: "https://www.linkedin.com/in/mairaanabellagomez/",
    },
    {
      nombre: "Andrea Joana Yanina",
      apellido: "Guaymas",
      github: "https://github.com/AndreaGuaymas",
      linkedin: "https://www.linkedin.com/in/andrea-joana-yanina-guaymas",
    },
    {
      nombre: "Belen",
      apellido: "Jessikowski",
      github: "https://github.com/beluirina",
      linkedin: "https://www.linkedin.com/in/belen-jessikowski/",
    },
    {
      nombre: "Brisa Ludmila",
      apellido: "Moreyra",
      github: "https://github.com/brisamoreyra",
      linkedin: "no-tiene",
    },
    {
      nombre: "Belén",
      apellido: "Nieto",
      github: "https://github.com/Belen-Nieto",
      linkedin: "https://www.linkedin.com/in/jbelennieto/",
    },
    {
      nombre: "Valentina",
      apellido: "Nieto",
      github: "https://github.com/carpincha",
      linkedin: "https://www.linkedin.com/in/valentina-nieto/",
    },
    {
      nombre: "Daira",
      apellido: "Portillo",
      github: "https://github.com/dairaportillo",
      linkedin: "https://www.linkedin.com/in/daira-portillo/",
    },
    {
      nombre: "Gerónimo",
      apellido: "Riesco",
      github: "https://github.com/Geronimo-Riesco",
      linkedin: "https://www.linkedin.com/in/ger%C3%B3nimo-ezequiel-riesco",
    },
    {
      nombre: "Agustina",
      apellido: "Roldán",
      github: "https://github.com/agus-plath",
      linkedin: "https://www.linkedin.com/in/agustina-roldan-/",
    },
    {
      nombre: "Alison",
      apellido: "Salazar",
      github: "https://github.com/AlisonSalazarGomez",
      linkedin: "no-tiene",
    },
    {
      nombre: "Kristel",
      apellido: "Sedano",
      github: "https://github.com/kristelsedano",
      linkedin: "https://www.linkedin.com/in/kristel-sedano-657325241/",
    },
    {
      nombre: "Sofia",
      apellido: "Senin",
      github: "https://github.com/SeninSofia",
      linkedin: "https://www.linkedin.com/in/sofia-senin/",
    },
    {
      nombre: "Abraham",
      apellido: "Trenyan",
      github: "http://github.com/AbrahamTrenyan",
      linkedin:
        "https://ar.linkedin.com/in/abrahamtrenyan?trk=public_profile_browsemap",
    },
    {
      nombre: "Ezequiel",
      apellido: "Villalba",
      github: "https://github.com/SamplerDev",
      linkedin: "https://www.linkedin.com/in/ezequiel-villalba/",
    },
  ],
};

/********************************************
consumo de json entre muchisimas comillas, por que si esto lo ven en artech me cagan a patadas en el trasero
*********************************************/

let card = document.querySelector(".cardd");
let nombre = document.querySelector(".nombre");
let puesto = document.querySelector(".puesto");
let gitHub = document.querySelector(".atext1");
let linkedin = document.querySelector(".atext2");

/*console.log(card, nombre.innerHTML)*/

let directora = Object.values(mjson.directora);

let populate = (arr) => {
  let git = gitHub.href;
  let linked = linkedin.href;

  for (var i = 0; i < arr.length; i++) {
    /*console.log(arr[i]);*/

    console.log(arr[0], arr[1], arr[3], linked);

    nombre.innerHTML = `${arr[0]} ${arr[1]}, ${arr[2]}`;
    linkedin.href = `${arr[3]}`;
    /* git = `${arr[4]}`;*/
  }
};

populate(directora);

let directivos = [
  ...document.querySelectorAll(".directivo"),
]; /*agarro las cards desde el documento con un spread operator */

let otrosDirectivos = Object.values(
  mjson.directivos
); /**agarro la info de los directivos desde el json */

let contenedor = document.querySelector(".directivos");

console.log(directivos);
console.log(otrosDirectivos);

function returnCards(jason,clase) {
  return jason
    .map(
      (valuesCard, index) => `
    <div class=\"card-grupo  ${clase}\">
    <div class="imgBx">
    <img src="" alt="Homero Simpson" />
    </div>
    <div class="content">
      <div class="details">
      <h2 class="nombre"> ${valuesCard.nombre}  ${valuesCard.apellido} <br /><span>" ${valuesCard.rol}" </span></h2>
      <div class="card_btn">
      <a class="atext1" href="${valuesCard.gitHub}" target="_blank"
        ><i></i>GitHub<img src="../img/cardsGrupo/github-icon.png"
      /></a>
      <a class="atext2" href="${valuesCard.linkedin}" target="_blank"
        ><i></i>LinkedIn<img
          src="../img/cardsGrupo/linkedin-icon.png"
      /></a>
    </div>
  </div>
</div>
</div>
`
    )
    .join("");
}

contenedor.innerHTML = returnCards(otrosDirectivos,'directivo1');

let orientadora = document.querySelector('.orientadora');
let jorientadora = Object.values(mjson.orientadora);

orientadora.innerHTML= returnCards(jorientadora,'orientadora1')





