/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    const result = []
    const arrCopy = array.slice()
    while (arrCopy.length > 0) {
        result.push(arrCopy.splice(0, size))
    }
    return result
}


module.exports = chunkArray