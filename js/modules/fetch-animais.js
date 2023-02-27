import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.especie}</h3>
      <span data-numero>${animal.total}</span>
    `;

    return div;
  }

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimais = createAnimal(animal);
    numerosGrid.appendChild(divAnimais);
  }

  function animarAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais através de
  // um arquivo JSON e cria cada animal utilizando CreateAnimal
  async function criarAnimais() {
    try {
      // transforma a resposta em JSON
      const animaisJson = await (await fetch(url)).json();

      animaisJson.forEach((animal) => preencherAnimais(animal));

      animarAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
  // fetchAnimais("./animaisapi.json");
}
