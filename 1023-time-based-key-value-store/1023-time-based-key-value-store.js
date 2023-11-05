var TimeMap = function () {
    this.map = {}

    return this
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map[key]) {
        this.map[key].push([value, timestamp])
    } else {
        this.map[key] = [[value, timestamp]]
    }

    return null
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    const current = this.map[key]

    if (!current) {
        return ''
    }

    let l = 0
    let r = current.length - 1

    let result = ''

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (current[mid][1] > timestamp) {
            r = mid - 1
            continue
        }

        if (current[mid][1] <= timestamp) {
            result = current[mid][0]
            l = mid + 1
        }
    }

    return result
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */