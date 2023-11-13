/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {  
    if (s.length < t.length) return ''
    
    const tMap = t.split('').reduce((acc,el) => {
       if (!acc[el]) {
           acc[el] = 1
       } else {
           acc[el] ++
       }

        return acc
    }, {})

    let formed = 0 
    const required = Object.keys(tMap).length
    let i = 0 
    let j = 0 

    const windowCount = {}

    let res = [-1, 0, 0]

    while (j < s.length) {
        if (!windowCount[s[j]]) windowCount[s[j]] = 0 
        windowCount[s[j]] ++ 

        if (tMap[s[j]] && windowCount[s[j]] === tMap[s[j]]) {
            formed ++
        }

        while (i <= j && formed === required) {
            if (res[0] == -1 || j - i + 1 < res[0]) {
                res[0] = j - i + 1
                res[1] = i
                res[2] = j

                if (res[0] === t.length) return s.slice(res[1], res[2] + 1)
            }

            windowCount[s[i]]-- 

            if (tMap[s[i]] && windowCount[s[i]] < tMap[s[i]]) {
                formed --
            }

            i++

        }

        j++
    }

    return res[0] < 0 ? '' : s.slice(res[1], res[2] + 1)
    
};