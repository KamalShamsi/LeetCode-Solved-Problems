/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let k = right;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        let hrs = 0;

        for(let i=0; i<piles.length; i++) {
            hrs += Math.ceil(piles[i] / mid);
        }


        if(h >= hrs) {
            right = mid - 1;
            k = Math.min(k, mid);
        }
        
        if(h < hrs) {
            left = mid + 1;
        }



    }

    return k;


};