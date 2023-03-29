import dadosReceitasJson from './receitas.json'

interface Receitas{ //NÃO PRECISA DESSA INTERFACE PRA FUNCIONAR, É APENAS UMA AJUDA
    titulo: string;
    imagem: string;
    preparo: string;
    ingredientes: string[]
}

let receita: Receitas[] = dadosReceitasJson

const getListaIngredientes = (num:number) => {
    console.log(receita[num].ingredientes)
}

const getCard = (num:number) => {
    console.log(receita[num])
}
getListaIngredientes(2)
getCard(1)
// console.log(receita[0].ingredientes)