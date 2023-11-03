/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const canEat = (piles, mid) => {
    let sum = 0;
    for(let ele of piles) {
        sum = sum + Math.ceil(ele/mid);
    }
    return sum
}

var minEatingSpeed = function(piles, h) {
    let max = 0;
    for(let ele of piles) {
        max = Math.max(ele, max);
    }
    let l = 1;
    let r = max;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(canEat(piles,mid) > h){
            l = mid + 1;
        } else {
            r = mid;
        }
    }
        return l;
};