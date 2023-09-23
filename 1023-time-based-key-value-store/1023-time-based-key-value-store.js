class TimeMap {
    constructor() {
        // Initialize the map to store keys and their values with timestamps
        this.map = new Map();
    }

    set(key, value, timestamp) {
        // If the key doesn't exist in the map, create an empty array for it
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        // Append the value and its timestamp to the list associated with the key
        this.map.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.map.has(key)) return "";

        // Perform binary search to find the closest timestamp
        let arr = this.map.get(key);
        let low = 0, high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid][0] === timestamp) {
                return arr[mid][1];
            } else if (arr[mid][0] < timestamp) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // If not found, return the value of the latest timestamp before the given one
        return high === -1 ? "" : arr[high][1];
    }
}
