// star Pattern - Right angled
function printStarPattern(row){
    
    let str = "";
    for(let i = 1; i<=row; i++){
        str += "*";
        console.log(str);
    }
    
}

const row = 4;
printStarPattern(row);

