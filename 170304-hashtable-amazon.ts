
var findUniqueChars = function(inputString) {
    console.log(inputString);
    var outputHashtable = {};
    for(var i=0; i<inputString.length; i++) {
        outputHashtable[inputString[i]] = inputString[i];
    }
    console.log(Object.keys(outputHashtable).join(''));
}

findUniqueChars('Zunaira');