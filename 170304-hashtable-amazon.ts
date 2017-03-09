'use strict'
const findUniqueChars = function(inputString) {
    let outputHashtable = {};
    for(let i=0; i<inputString.length; i++) {
        outputHashtable[inputString[i]] = inputString[i];
    }
    console.log(Object.keys(outputHashtable).join(''));
}

findUniqueChars('Zunaira Sayed Zakir');