/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function getMinus(a) {
    return a.charCodeAt(0) - 'a'.charCodeAt(0)
}
// It`s a typical question of slide window
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    const countArr = new Array(26).fill(0)
    for(let i = 0; i < s1.length; i++) {
        countArr[getMinus(s1[i])]--
        countArr[getMinus(s2[i])]++
    }
    let diff = 0
    countArr.forEach(item => {
        if(item !== 0) {
            diff++
        }
    })
    if (diff === 0) return true
    for(let index = s1.length; index < s2.length; index++) {
        let start = index - s1.length
        if (s2[index] === s2[start]) continue
        if (countArr[getMinus(s2[start])] === 0) {
            diff++
        }
        countArr[getMinus(s2[start])]--
        if (countArr[getMinus(s2[start])] === 0) {
            diff--
        }
        
        if (countArr[getMinus(s2[index])] === 0) {
            diff++
        }
        countArr[getMinus(s2[index])]++
        if (countArr[getMinus(s2[index])] === 0) {
            diff--
        }
        
        if (diff === 0) return true
    }
    return false
}
/*
// the method below can be accpeted, but the efficiency is not high
var checkInclusion = function(s1, s2) {
    const map = new Map()
    s1.split('').forEach(item => {
        map.set(item, true)
    })
    let newStr = s1.split('').sort().join('')
    let index = 0
    for(; index < s2.length - s1.length + 1;) {
        if (map.has(s2[index])) {
            let end = s2.length - 1
            for(let i = index + 1; i < s2.length; i++) {
                if (!map.has(s2[i])) {
                    end = i - 1
                    break
                }
            }
            if (end - index + 1 >= s1.length) {
                for(; end - index + 1 >= s1.length; index++) {
                    if (newStr === s2.slice(index, index + s1.length).split('').sort().join('')) {
                        return true
                    }
                }
            }
            index = end + 1
        } else {
            index++
        }
    }
    return false
};
*/