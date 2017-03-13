var _ = require('lodash');

var extractLoginStep = function (str) {
    var strArray = str.split('\n');
    var finalStrArray = [];
    for (var i = 0; i < strArray.length; i++) {
        givenStr = strArray[i].indexOf('Given');
        var stepName = strArray[i].substr(givenStr).trim();
        if(!_.includes(finalStrArray, stepName)) {
            finalStrArray.push(stepName);
        }
    }
    console.log(finalStrArray.join('\n'));
}

var fs = require('fs');
fs.readFile('./170310-login-step.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    extractLoginStep(data);
});
