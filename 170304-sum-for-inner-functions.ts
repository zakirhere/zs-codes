var Sum = function(num1) {
    var result = num1;
    return function(num2) {
        result += num2;
        return function(num3) {
            return result += num3;
        }
    }
};

console.log(Sum(4)(2)(4));