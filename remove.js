const prompt = require('prompt-sync')();

const showList = require('./show');

function removeFromList(list){
    showList(list);

    let position = Number(prompt('Qual elemento você deseja remover: '));
    position -= 1;
    list.splice(position, 1);
    console.log('Item removido com sucesso!');
}

module.exports = removeFromList;