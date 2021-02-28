//Wähle den Button aus dem html-file:
let buttonAsync = document.querySelector("#api");

buttonAsync.addEventListener("click", api);

async function api() {
  //hole den API (im JSON-Format):
  const response = await fetch(
    `https://official-joke-api.appspot.com/random_joke`
  );
  //wandle das JSON-Format um in ein Javascript-Objekt im Speicher:
  const API = await response.json();
  console.log(API);
  //erschaffe ein neues element vom Typ <div>
  const element = document.createElement("div");
  element.classList = "API";
  //schreibe html-code in das div.element
  element.innerHTML = 
    `  <div class="API-content">
       <h3>${API.setup}</h3>
       <p>${API.punchline}</p>
       </div>`;
  //hänge das neue element unten am container an
  document.querySelector(".container").appendChild(element);
}
