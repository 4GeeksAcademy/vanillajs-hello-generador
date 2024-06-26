/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  // Inicializamos un array vacío para almacenar las combinaciones
  let domains = [];

  // Generamos las combinaciones
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        // Concatenamos las palabras y añadimos el dominio ".com"
        let domain = p + a + n + ".com";
        // Añadimos el dominio generado al array de dominios
        domains.push(domain);
      }
    }
  }

  // Imprimimos las combinaciones en la consola
  console.log(domains);

  // Opcional: Si deseas mostrar los dominios en el HTML
  let domainList = document.createElement("ul");
  domains.forEach(function(domain) {
    let listItem = document.createElement("li");
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });

  document.body.appendChild(domainList);
};
