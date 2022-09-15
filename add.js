const prompt = require('prompt-sync')();

function addToList(list){
    const item = prompt('Digite o novo item da lista: ');
    const position = list.length;
    list[position] = item;

    console.log('Item foi adicionado na lista!');
}
module.exports = addToList;