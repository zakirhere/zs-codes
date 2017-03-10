
class Palindrome {
    private inputString: string;

    constructor(str: string) {
        this.inputString = str;
    }
    public isPalindrome(): boolean {
        let str = this.inputString;
        let len = str.length;
        let j = len - 1;
        if (this.isValidLength()) {
            for (let i = 0; i < len / 2; i++) {
                if (str[i] !== str[j--]) return false;
            }
        }
        return true;
    }
    isValidLength = (): boolean => {
        let len = this.inputString.length;
        if (len < 2 || len === 2) return true;
        return len % 2 !== 0;
    }
}

var myPalindromes = new Palindrome('cacac');
console.log(myPalindromes.isPalindrome());
