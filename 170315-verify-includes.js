var _ = require('lodash');

var checkIncludes = function() {
    var expectedMessage = 'REASON';
    if(_.includes(expectedMessage, 'REASON')) {
        console.log('Inside _.includes');
    }
}

checkIncludes();
