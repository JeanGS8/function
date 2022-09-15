const prompt = require('prompt-sync')();

const showMenu = require('./menu');
const addToList = require('./add');
const showList = require('./show');
const removeFromList = require('./remove');

const list = [];
let option=0;

do{
    console.clear();
    showMenu();
    option = Number(prompt('>> '));
    
    console.clear();
    switch(option){
        case 1:
            addToList(list);
            break
            
        case 2:
            showList(list);
            break

        case 3:
            removeFromList(list);
            break

        case 4:
            console.log(`Finalizando a aplicação!`);
            break

        default: console.log(`[ERRO] opção inválida!`);
    }
    prompt('pressione enter para continuar...');
}while(option != 4);