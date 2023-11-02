/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(pattern, str) {
    
   let windowStart = 0;
   let matched = 0;
   let charFreq = {};
    
   for(let i=0;i<pattern.length;i++){
       let char = pattern[i];
       if(charFreq[char] === undefined){
           charFreq[char] = 1;
       }else{
           charFreq[char]++;
       }
   }
    
    for(let windowEnd=0; windowEnd < str.length;windowEnd++){
        
        let rightChar = str[windowEnd];
        
        if(rightChar in charFreq){
            charFreq[rightChar] -=1;
            if(charFreq[rightChar] === 0){
            matched +=1;
            }
        }
    
    
    if(matched === Object.keys(charFreq).length){
        return true;
    }
    
    if(windowEnd >= pattern.length -1){
        let leftChar = str[windowStart];
        windowStart +=1;
        if(leftChar in charFreq){
            if(charFreq[leftChar] === 0){
                matched -=1;
            }
            charFreq[leftChar] +=1;
            
         }
      }
    
  }
    
    return false;
    
};