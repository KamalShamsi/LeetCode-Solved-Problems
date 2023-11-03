/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var [left,right]=[1,Math.max(...piles)];
    var res=right;

    while(left<=right){
        var k=Math.floor((left+right)/2);
        var hours=0;
        for(var p of piles){
            hours+=Math.ceil(p/k);
        }
        if(hours<=h){
            res=Math.min(res,k);
            right=k-1;
        }else{
            left=k+1;
        }
    }
    return res;
    
};