const sumAll = function(valueOne, valueTwo) {
    let sum = 0;
    if (valueOne < 0 || valueTwo < 0){
        return "ERROR";
    }
    else if (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo)) return "ERROR";
    else if (valueOne < valueTwo) {
        for (i=valueOne; i<=valueTwo; i++){
            sum +=i;
        }
    }
    else if (valueOne > valueTwo){
        
        for (i=valueTwo; i<=valueOne; i++){
            sum +=i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
