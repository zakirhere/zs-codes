var extractObjectName = function (str) {
    var strArray = str.split('\n');
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].endsWith(': {')) {
            var objName = strArray[i].slice(0, -3)
            console.log(objName.trim());
        }
    }
}

var fs = require('fs');
fs.readFile('./170310-extract-testuser-objectname.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    extractObjectName(data);
});
