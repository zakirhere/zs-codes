/**
 * Created by hussaiz on 9/20/16.
 */
var input = 'abcabcabcd';  //abc abc abcd

input = chopByRepeatedLetter(input);
console.log('longest string length is', getLongestStringCount(input));


function chopByRepeatedLetter(input) {
  // var inpArr = input.split('');
  var outArr = [];
  
  // while(input.length > 0) {
  //  
  // }
  
  for (var i=0; i<input.length; i++) {
    var pos = input.indexOf(input[i], i+1);
    console.log('pos', pos);
    if(pos > 0) {
      console.log('abcabcd'.split('a'));
      outArr.push(input.split(input[i]));
      console.log('outArr', outArr);
      return outArr;
      // i += pos;
      // outArr.push(inpArr.slice(0, pos));
    }
    else {
      // outArr.push(inpArr.slice(i, inpArr.length));
      break;
    }
  }
  return outArr;
}

//
// function chopByRepeatedLetter(input) {
//   var inpArr = input.split('');
//   var outArr = [];
//
//   for (var i=0; i<inpArr.length; i++) {
//     var pos = inpArr.indexOf(inpArr[i], i+1);
//     if(pos > 0) {
//       i += pos;
//       outArr.push(inpArr.slice(0, pos));
//     }
//     else {
//       outArr.push(inpArr.slice(i, inpArr.length));
//       break;
//     }
//   }
//   return outArr;
// }
//




function getLongestStringCount(strArray) {
  console.log('strArr', strArray);
  var str = '';
  for (var i=0; i<strArray.length; i++) {
    if(strArray[i].length > str.length) {
      str = strArray[i];
    }
  }
  return str.length;
}