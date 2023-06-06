"use strict";
let receita = [
    {
        titulo: 'Lasanha de carne',
        imagem: 'https://static.itdg.com.br/images/640-420/e6aad16dfa0581de2d2f1d35f5aa7833/324587-original.jpg',
        preparo: 'Cozinhe a carne moída com temperos a gosto, faça um molho de tomate e monte as camadas de massa, carne e queijo, terminando com molho e queijo ralado. Leve ao forno por 30 minutos.',
        ingredientes: [
            '500g de carne moída',
            '1 pacote de massa para lasanha',
            '1 lata de molho de tomate',
            '300g de queijo mussarela ralado',
        ],
    },
    {
        titulo: 'Risoto de camarão',
        imagem: 'https://static.itdg.com.br/images/640-420/ff9dd9b72ecb6939ca3eaed852c45574/80890-original.jpg',
        preparo: 'Refogue cebola e alho em uma panela com manteiga, adicione o arroz arbóreo e frite por alguns minutos. Acrescente o vinho branco e deixe evaporar. Adicione caldo de legumes aos poucos e mexa sempre até o arroz ficar cozido. No final, adicione o camarão já cozido e tempere a gosto.',
        ingredientes: [
            '500g de camarão e 1 xícara de arroz arbóreo',
            '1 cebola e 2 dentes de alho picados',
            '1/2 xícara de vinho branco',
            '1,5 litro de caldo de legumes',
        ],
    },
    {
        titulo: 'Bolo de cenoura',
        imagem: 'https://static.itdg.com.br/images/640-420/d290bc79bcad112ee9095604e45eb262/365326-original.jpg',
        preparo: 'Bata no liquidificador a cenoura, os ovos e o óleo. Em uma tigela, misture a farinha de trigo, o açúcar e o fermento. Adicione a mistura do liquidificador e misture bem. Despeje em uma forma untada e enfarinhada e leve ao forno por cerca de 40 minutos.',
        ingredientes: [
            '3 cenouras médias e 3 ovos',
            '1 xícara de óleo',
            '2 xícaras de açúcar e 2 de farinha de trigo',
            '1 colher de sopa de fermento em pó',
        ],
    },
];
const getListaIngredientes = (receita) => {
    let texto = '<ul>';
    texto += receita.ingredientes
        .map((ingrediente) => `<li>${ingrediente}</li>`)
        .reduce((accumulator, currentValue) => accumulator + currentValue, '');
    texto += '</ul>';
    return texto;
};
const getCard = (receita) => {
    const listaIngredientes = getListaIngredientes(receita);
    return `
      <div class="card bg-info-subtle" style="width: 300px">
        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
        <div class="card-body">
          <h2 class="card-title">${receita.titulo}</h2>
          <div class="card-text">
            ${listaIngredientes}
            <hr>
            <p>${receita.preparo}</p>
          </div>
        </div>
      </div>
    `;
};
const preencheCatalogo = () => {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    pnlCatalogo.innerHTML = receita
        .map(getCard)
        .reduce((accumulator, currentValue) => accumulator + currentValue, '');
};
//# sourceMappingURL=receitas.js.map