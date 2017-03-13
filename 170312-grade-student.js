
function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var grade = parseInt(readLine());
        if(isFailed(grade)) console.log(grade);
        else {
            console.log(roundOff(grade));
        }
    }

}


function roundOff(score) {
    var balance = score % 5;
    var offset = 5 - balance;
    if(balance > 2) {
        return score + offset;
    }
    return score;
}
    
function isFailed(score) {
    if(score<38) return true;
}
