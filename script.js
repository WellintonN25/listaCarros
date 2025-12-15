const itens = [
    {
        id:1,
        nome:'corolla',
        marca:'toyota',
        desc:'carro sedan, 4 portas freios abs',
        image: 'https://blog.toyotasulpar.com.br/wp-content/uploads/2024/10/Os-5-melhores-motivos-para-comprar-um-Toyota-Corolla.jpg',
    },

        {
        id:2,
        nome:'civic',
        marca:'honda',
        desc:'carro sedan, 4 portas freios abs',
        image: 'https://s2-autoesporte.glbimg.com/WHYnlXOVQNj5H7Z10sZZeVCbE2s=/0x0:1480x987/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/o/He4JKxSU2oanE6KpVXMA/civic-touring-3-.jpg',
    },

        {
        id:3,
        nome:'voyage',
        marca:'volkswagen',
        desc:'carro sedan, 4 portas freios abs',
        image:'https://www.automaistv.com.br/wp-content/uploads/2018/03/Volkswagen-Voyage.jpeg',
    },
];

const lista = document.querySelector('.lista');
const fragment = document.createDocumentFragment();

itens.forEach(produtos => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${produtos.image}" alt="${produtos.nome}" class="card-image"/>
        <h2 class="card-title">${produtos.nome}</h2>
        <h3 class="card-brand">${produtos.marca}</h3>
        <p class="card-desc">${produtos.desc}</p>
    `;
    fragment.appendChild(card);
});
lista.appendChild(fragment);

// 1. Selecionar os elementos necessários
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgExpandida");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Seleciona TODAS as imagens que tem a classe .card-img (do exemplo anterior)
const imagensCarros = document.querySelectorAll(".card");

// 2. Adicionar evento de clique em CADA imagem de carro
imagensCarros.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex"; // Mostra o modal (usando flex para centralizar)
    modalImg.src = e.target.src; // Pega o link da foto clicada e passa pro modal
    
    // Opcional: Pegar o texto do 'alt' e por na legenda
    if(captionText) captionText.innerText = e.target.alt; 
  });
});

// 3. Função para fechar o modal ao clicar no 'X'
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 4. (Opcional) Fechar se clicar fora da imagem (no fundo preto)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});