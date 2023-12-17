

const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body')

const footer = document.getElementById('footer')
const header = document.querySelector('header')
const card = document.querySelectorAll('card')


toggle.addEventListener('click', function(){

    this.classList.toggle("bi-moon-stars");

    if (this.classList.toggle("bi-brightness-high")) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        header.style.background = "#2c2b2b";
        header.style.color = "#f0f0f0 ";
        footer.style.background = "#2c2b2b";
        footer.style.color = "#f0f0f0 ";
    }else{
        body.style.background = "#2c2b2b";
        body.style.color = 'white'
        body.style.transition = '2s'
        footer.style.background = '#fff'
        footer.style.color = "#2c2b2b";
        header.style.background = "#fff";
        header.style.color = "#2c2b2b";
        card.style.background = 'red'

    }

})



const changeText = () => {
  
  let idiom = document.getElementById("selectLanguages").value;

  if (idiom === "es") {
    texto = [
      {
        title: "BBQ Crujiente",
        precio: "$18.900",
        descripcion: "Sandwich BBQ Crunch (1 Fillete pollo apanado) ",
      },
      {
        title: "BBQ Crujiente",
        precio: "$8.900",
        descripcion:
          "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)",
      },
      {
        title: "Kentucky Sandwich",
        precio: "$15.900",
        descripcion: "1 Sandwich BBQ Crunch (1 Fillete pollo apanado)",
      },
      {
        title: "Kentucky Sandwich",
        precio: "$18.900",
        descripcion:
          "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)",
      },
      {
        title: "BBQ Crujiente",
        precio: "15.900",
        descripcion:
          "1 Sanwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papas",
      },
      {
        title: "Kentucky Coronel Sandwich",
        precio: "$$16.900",
        descripcion:
          "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)",
      },
      {
        title: "Combo Kentucky Sandwich",
        precio: "$23.900<",
        descripcion:
          "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)",
      },
      {
        title: "BBQ Crujiente",
        precio: "$29.900",
        descripcion:
          "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)",
      },
    ];
  } else if(idiom === "en"){
    texto = [
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
      {
        title: "BBQ Crunch",
        precio: "$18.900",
        descripcion:
          "Some quick example text to build on the card title and make",
      },
    ];
  }

  contador = 1;
  
  texto.forEach(function (texts) {

    document.getElementById("title-" + contador).innerText = texts.title;
    document.getElementById("precio-" + contador).innerText =texts.precio;
    document.getElementById("descripcion-" + contador).innerText =texts.descripcion;

    contador++;
  });
};







// const languages = document.getElementById("idioms");

// const changesLanguages = async (language) => {
//     const requesJSON = await fetch(`./languages/${language}.json`);
//     const text = await requesJSON.json()

//     console.log(text);
// }

// languages.addEventListener('click', (e)=> {

//     changesLanguages(e.target.value);
// })




