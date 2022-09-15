function showList(list){
    for(let i=0; i<list.length; i++){
        console.log(`${i+1}º item: ${list[i]}`);
    }
}

module.exports = showList;