const array1 = [10, 1, 3, 2, 2]
const array2 = [4, 6, 0, 8, 2]

console.log(verifyArrays(array1, array2))

//O(N^2)
function verifyArrays(arr1, arr2) {
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == arr2[j]) {
                return true
            }
        }
    }

    return false;
}

console.log(bestApproachToVerifyArray(array1, array2))

//O(N)
function bestApproachToVerifyArray(arr1, arr2) {

    let map = {}

    for (let i = 0; i < arr1.length; i++) {
        if (!map[i]) {
            const item = arr1[i]
            map[item] = true;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }

    return false
}


console.log(containItem3(array1, array2));

function containItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}