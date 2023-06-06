/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let map = {}
    let maxCharValue = 0
    let maxChar = ''

    for (char of text) {
        if (!map.hasOwnProperty(char)) {
            map[char] = 0
        }
        map[char]++
    }

    for (char in map) {
        if (map[char] > maxCharValue) {
            maxCharValue = map[char]
            maxChar = char
        }
    }

    return maxChar
}

function maxRecurringChar(text) {
    let map = {}

    for (char of text) {
        if (!map.hasOwnProperty(char)) {
            map[char] = 0
        }
        map[char]++
    }

    let chars = Object.keys(map)
    let totals = Object.values(map)
    let max = Math.max(...totals)

    return chars[totals.indexOf(max)]
}

module.exports = maxRecurringChar;