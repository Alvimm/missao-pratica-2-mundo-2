
let receita: Receita[] = [
  {
    titulo: 'Pudim de Sorvete',
    imagem:
      'https://img.itdg.com.br/tdg/images/recipes/000/000/727/358399/358399_original.jpg?mode=crop&width=710&height=400',
    preparo:
      'Em uma panela, coloque o leite condensado, o leite e as gemas. Leve ao fogo. Quando esfriar, acrescente o creme de leite. Bata as claras com o açúcar, na batedeira. Acrescente esse suspiro no creme reservado. Coloque em forma para pudim untada. Leve ao freezer por 6 horas.',
    ingredientes: [
      'Leite condensado',
      'Leite',
      'Ovos',
      'Creme de leite',
      'Açúcar',
    ],
  },
  {
    titulo: 'Mexidinho',
    imagem:
      'https://img.itdg.com.br/tdg/images/recipes/000/318/379/366167/366167_original.jpg',
    preparo:
      'Em uma panela adicione o azeite, as linguiças fatiadas e a cebola em tiras e refogue. Adicione o pimentão em tiras, o alho e tempere com cominho em pó. Em seguida adicione o arroz e o feijão cozidos, mexa delicadamente. Finalize com o ovo frito e o coentro.',
    ingredientes: [
      'Linguiças finas',
      'Cebola, alho e cominho',
      'Arroz cozido e coentro',
      'Feijão vermelho',
      'Ovo frito e azeite',
    ],
  },
  {
    titulo: 'Yakisoba',
    imagem:
      'https://img.itdg.com.br/tdg/images/recipes/000/076/053/324834/324834_original.jpg?mode=crop&width=710&height=400',
    preparo:
      'Cozinhe o macarrão. Em uma panela grande, coloque o óleo e refogue a cebola. Acrescente a carne, o brócolis, a couve-flor, a cenoura, o champignon e tempere com shoyu. Cozinhe os legumes até ficarem em ponto al dente. Adicione o macarrão e misture bem.',
    ingredientes: [
      'Macarrão',
      'Molho shoyo',
      'Couve-flor e brócolis',
      'Champignon e cenoura',
      'Tirinhas de carne',
    ],
  },
];


interface Receita {
    titulo: string;
    imagem: string;
    preparo: string;
    ingredientes: string[];
  }
// let receita: Receita[] = dados

// const getListaIngredientes = (receita: Receita) => {
//   let lista: any = [];
//   let ul = '<ul>';
//   lista += receita.ingredientes
//     .map((ingrediente: string) => `<li>${ingrediente}</li>`)
//     .reduce((prev: any, curr: any) => prev + curr, '');
//   ul += '</ul>';
//   return lista;
// };

// const getCard = (receita: Receita) => {
//   const listaIngredientes = getListaIngredientes(receita);
//   return `
//         <div class='card' style='width: 250px'>
//             <img src='${receita.imagem}' class='card-img-top' alt='${receita.titulo}'>
//             <div class='card-body'>
//                 <h2 class='card-title'>${receita.titulo}</h2>
//                 <div class='card-text'>
//                 <ul>${listaIngredientes}</ul>
//                 <hr>
//                 <p>${receita.preparo}</p>
//                 </div>
//             </div>
//         </div>
//     `;
// };


// const preencheCatalogo = () => {
//   const pnlCatalogo: any = document.getElementById('pnlCatalogo');
//   const html = receita.map(getCard).reduce((acc, curr) => acc + curr, '');
//   pnlCatalogo.innerHTML = html;
// };

  const getListaIngredientes = (receita: Receita): string => {
    const lista: string = receita.ingredientes
      .map((ingrediente: string) => `<li>${ingrediente}</li>`)
      .join('');
    return `<ul>${lista}</ul>`;
  };
  
  const getCard = (receita: Receita): string => {
    const listaIngredientes: string = getListaIngredientes(receita);
    return `
      <div class="card" style="width: 250px">
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
  
  const preencheCatalogo = (): void => {
    const pnlCatalogo: HTMLElement | null = document.getElementById('pnlCatalogo');
    if (pnlCatalogo) {
      const html: string = receita.map(getCard).join('');
      pnlCatalogo.innerHTML = html;
    }
  };
  