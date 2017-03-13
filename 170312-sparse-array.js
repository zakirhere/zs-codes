// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

var sparseArray = function() {
var inputStrCount = 4;
var inputStr = ['aba', 'baba', 'aba', 'xzxb'];
var queryStrCount = 3;
var queryStr = ['aba', 'xzxb', 'ab'];

    for(var i=0; i<queryStrCount; i++) {
        console.log(getStrMatchCount(queryStr[i], inputStr, inputStrCount));
    }
}

var getStrMatchCount = function(str, inputStr, inputStrCount) {
    var count = 0;
    for(j=0; j<inputStrCount; j++) {
        if(inputStr[j] === str) count++;
    }
    return count;
}

sparseArray();
