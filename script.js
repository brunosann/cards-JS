const filmes = [
  { titulo: "Suits", img: 1, categorias: ["01", "04"] },
  { titulo: "Jack chan", img: 2, categorias: ["03", "04"] },
];

const categorias = [
  { id: "01", titulo: "Drama" },
  { id: "02", titulo: "Suspense" },
  { id: "03", titulo: "Ação" },
  { id: "04", titulo: "Comédia" },
  { id: "05", titulo: "Terror" },
];

function pegarCategorias(catId) {
  return categorias.find((cat) => cat.id === catId);
}

function cardComponent(props) {
  return `
  <div class="card my-3" >
    <img class="card-img-top" src="https://picsum.photos/100/100?${
      props.img
    }" alt="">
    <div class="card-body">
      <h5 class="card-title">${props.titulo}</h5>
      <p class="card-text">
        ${props.categorias
          .map(
            (cat) =>
              `<a href="#" class="badge badge-secondary mx-1">${
                pegarCategorias(cat).titulo
              }</a>`,
          )
          .join("")}
      </p>
    </div>
  </div>
  `;
}

const cardsComponents = filmes.map((filme) => cardComponent(filme));
document.querySelector("#app").innerHTML = cardsComponents.join("");

const form = document.querySelector("form");
const handleSubmit = (e) => {
  e.preventDefault();
  const titulo = e.target.titulo.value;
  const img = e.target.imagem.value;
  const categorias = [...e.target.categorias.selectedOptions].map(
    (item) => item.value,
  );

  filmes.push({ titulo, img, categorias });
  const cardsComponents = filmes.map((filme) => cardComponent(filme));
  document.querySelector("#app").innerHTML = cardsComponents.join("");
};

form.addEventListener("submit", handleSubmit);
