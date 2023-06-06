/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0
    for(let i = 0; i < text.length; i++) {
        if ('aeiou'.includes(text[i].toLowerCase())) count++
    }
    return count
}

function vowelsCounter(text) {
    return (text.match(/[aeiou]/gi).length || 0)
}



module.exports = vowelsCounter;
