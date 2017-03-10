var _ = require('lodash');
var getArrayIndex = function(arr, val) {
    return _.findIndex(arr, val);
}

var index = getArrayIndex(['a', 'b', 'c', 'd', 'e', 'f'], function(val) { return val === 'c' });
console.log('test completed', index);