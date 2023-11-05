class TimeMap {
    constructor() {
        this.data = new Map();
    }

    set = (key, value, timestamp) => {
        if (!this.data.has(key)) {
            this.data.set(key, []);
        }
        this.data.get(key).push({ value, timestamp });
    };

    get = (key, timestamp) => {
        if (!this.data.has(key)) return "";
        const values = this.data.get(key);
        let left = 0;
        let right = values.length - 1;
        while (left <= right) {
            let mid = left + right >>> 1
            if (values[mid].timestamp <= timestamp) {
                left = mid + 1;
            } else right = mid - 1;
        }
        if (right >= 0) return values[right].value;
        return "";
    };
}