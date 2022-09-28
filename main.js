window.onload = (event) => {
  var pricePizza = document.getElementById('pizzaPrice');
  var namePizza = document.getElementById('pizzaName');
  var ingredientsPizza = document.getElementById('pizzaIngredients');
  var imgPizza = document.getElementById("img-pizza");
  console.log(localStorage.getItem);

  if (localStorage.length > 0) {
    pricePizza.textContent = localStorage.getItem("pizzaPrice");

    namePizza.textContent = localStorage.getItem("pizzaName");

    ingredientsPizza.textContent = localStorage.getItem("pizzaIngredients");

    imgPizza.setAttribute('src', localStorage.getItem("imagenPizza"));
  } else {
    imgPizza.setAttribute('src', '');
  }
};

let pizzaNapo = {
  id: 1,
  nombre: "Pizza Napolitana",
  ingredientes: ["Queso", "Tomate", "Ajo"],
  precio: 1000,
  imagen: "./img/pizza-napolitana.jpeg"
}
let pizzaBarrigona = {
  id: 2,
  nombre: "Pizza Barrigona",
  ingredientes: ["Queso", "Jamon", "Huevos Fritos", "Panceta"],
  precio: 2000,
  imagen: "./img/pizza-barrigona.jpeg"
}
let pizzaEspecial = {
  id: 3,
  nombre: "Pizza Especial",
  ingredientes: ["Queso", "Jamon", "Morrones"],
  precio: 1200,
  imagen: "./img/pizza-especial.jpeg"
}
let pizzaCalabresa = {
  id: 4,
  nombre: "Pizza Calabresa ",
  ingredientes: ["Queso", "Longaniza", "Morrones"],
  precio: 1500,
  imagen: "./img/pizza-calabresa.jpeg"
}
let pizzaVegetariana = {
  id: 5,
  nombre: "Pizza Vegetariana",
  ingredientes: ["Queso", "Brocoli", "Morrones", "Choclo"],
  precio: 1700,
  imagen: "./img/pizza-vegetariana.jpeg"
}
let pizzaFugazzeta = {
  id: 6,
  nombre: "Pizza Fugazzeta",
  ingredientes: ["Queso", "Cebolla", "Oregano"],
  precio: 1800,
  imagen: "./img/pizza-fugazzeta.jpeg"
}

let pizzas = [pizzaNapo, pizzaBarrigona, pizzaEspecial, pizzaCalabresa, pizzaVegetariana, pizzaFugazzeta]
let list = document.getElementById('pizzaList');

const searchPizza = () => {
  let valueid = document.getElementById('value-id').value;
  var pricePizza = document.getElementById('pizzaPrice');
  var namePizza = document.getElementById('pizzaName');
  var ingredientsPizza = document.getElementById('pizzaIngredients');
  var empty = document.getElementById('empty');
  var imgPizza = document.getElementById("img-pizza");
  empty.textContent = "";
  pricePizza.textContent = "";
  namePizza.textContent = "";
  ingredientsPizza.textContent = "";
  imgPizza.setAttribute('src', '');

  if (valueid == "") return empty.textContent = "Ingrese un número por favor."

  var found = pizzas.find(function (post, index) {
    empty.textContent = ""
    if (post.id == valueid) {
      pricePizza.textContent = post.precio;
      localStorage.setItem("pricePizza", post.precio);
      namePizza.textContent = post.nombre;
      localStorage.setItem("namePizza", post.nombre);
      ingredientsPizza.textContent = post.ingredientes.join(", ");
      localStorage.setItem("ingredientsPizza", post.ingredientes.join(", "));
      imgPizza.setAttribute('src', post.imagen);
      localStorage.setItem("imagenPizza", post.imagen);
      return true;
    }
  });

  if (found == undefined) return empty.textContent = "Debe ser un número del 1 al 6 inclusive."


}