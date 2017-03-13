//shift array
// [1, 2, 3, 4, 5], 2 => [3, 4, 5, 1, 2]
var rotateArray = function(arr, position) {
    var outputArray = [];
    for(var i=position; i<arr.length; i++) {
        outputArray.push(arr[i]);
    }
    for(var i=0; i<position; i++) {
        outputArray.push(arr[i]);
    }
    return outputArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));