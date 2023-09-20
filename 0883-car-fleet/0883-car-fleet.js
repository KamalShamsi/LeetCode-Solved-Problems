/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // Create an array representation of the road from 0 to target. 
    // Each position will store the ETA to target for the car at that position.
    const roadETA = new Array(target + 1).fill(null);
    
    // Calculate the ETA for each car to the target and store it in roadETA.
    for(let i = 0; i < position.length; i++) {
        roadETA[position[i]] = (target - position[i]) / speed[i];
    }
    
    let latestETA = -1;   // Keep track of the maximum ETA seen so far.
    let fleetCount = 0;   // Count of total fleets.
    
    // Iterate through the road from the target to the start.
    for(let i = target; i >= 0; i--) {
        // If no car is at this position, skip.
        if(roadETA[i] == null) continue;
        
        // If the car's ETA is more than the latest ETA, it's a new fleet.
        if(roadETA[i] > latestETA) {
            latestETA = roadETA[i];
            fleetCount++;
        }
    }
    return fleetCount;
};
