var maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;
    
    for(let i of prices){
        if(i < min ){
            min = i;
        }else {
            let temp = i - min;
            if(temp > max){
                max = temp;
            }
        }
    }
    return max;
};