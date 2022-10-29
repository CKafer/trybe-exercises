const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// De olho na dica 👀: use o array destructuring e abbreviation object literal.

// escreva toObject abaixo
const toObject = (car) => {
    const [model, factory, year] = car
    return {
        model: model,
        factory: factory,
        year: year
    }
}

console.log(toObject(palio));