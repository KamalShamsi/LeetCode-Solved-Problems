class TimeMap {
    constructor() {
        this.map = new Map()
    }
    set(k, v, ts) {
        if (!this.map.has(k)) this.map.set(k, [])
        this.map.get(k).push([v, ts])
    }
    get(k, ts) {
        const arr = this.map.get(k) || []
        return this.#bs(arr, ts)
    }
    #bs(arr, ts) {
        let res = "", l = 0, r = arr.length - 1
        while (l <= r) {
            const p = (l + r) >>> 1
            const [v, t] = arr[p]
            if (t === ts) return v
            if (t > ts) r = p - 1
            else res = v, l = p + 1
        }
        return res
    }
};