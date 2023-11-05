 class TimeMap {
     constructor() {
         this.map = new Map();
     }

     set(key, value, timestamp) {
         if (this.map.has(key)) {
             const oldVals = this.map.get(key);
             oldVals.push([value, timestamp]);
             this.map.set(key, oldVals);
         } else {
             this.map.set(key, [[value, timestamp]]);
         }
     }

     get(key, timestamp) {
         let result = "";
         
         if (this.map.has(key)) {
             const pairs = this.map.get(key);
             let left = 0;
             let right = pairs.length - 1;
            
             while (left <= right) {
                 let middle = Math.floor((left + right) / 2);

                 if (pairs[middle][1] > timestamp) {
                     right = middle - 1;
                 } else if (pairs[middle][1] < timestamp) {
                     left = middle + 1;
                     result = pairs[middle][0];
                 } else {
                     result = pairs[middle][0];
                     return result;
                 }
             }

             if (left > right) {
                 return result;
             }
         } else {
             return result;
         }
     }
 }