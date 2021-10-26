//example: hi my name is pedro -> oderp si ym ih

//O(N)
function reverseString(str) {
    let string = ""
    let backwards = [];
    for(let i = str.length; i >= 0; i--) {
        string += str.charAt(i)
    }

    return string;
}

function reverseString_approach2(str) {
    return str.split("").reverse().join('')
}

const str = "hi my name is pedro";
console.log(reverseString(str))
console.log(reverseString_approach2(str))