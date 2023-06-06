/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
    return text.split('').reverse().join('')
    // return [...text].reverse().join('')
}

// function reverseString(text) {
//     let result = ''
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i]
//     }
//     return result
// }

function reverseString(text) {
    let result
    for (let char of text) {
        result = char + result
    }
    return result
}

function reverseString(text) {
    if (text === '') {
        return ''
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

function reverseString(text) {
    return text.split('').reduce((acc, c) => c + acc, '')
    // return [...text].reduce((acc, c) => c + acc, '')
}

module.exports = reverseString