var minEatingSpeed = function(piles, h) {
    let low = 1, high = Math.max(...piles);
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        let totalHours = 0;
        for (let pile of piles) {
            totalHours += Math.ceil(pile / mid);
        }
        
        if (totalHours > h) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
};
