/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

function longestWord(text) {
    let wordArray = text.split(' ')

    let result = wordArray.reduce((longest, current) => {

        if (current.length > longest.length) {    
            longest = current
        }

        return longest

    },'')

    return result
}

function longestWord(text) {
    return text.split(' ').sort((a, b) => b.length - a.length)[0]
}


module.exports = longestWord