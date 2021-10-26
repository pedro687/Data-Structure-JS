//Google question interview
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined


//O(N^2)
function findDuplicatedIndices_approach1(array) {
    let num = -1;

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i] == array[j]) {
            if (num == -1 || j < num) {
                num = j
            }
           }
        }
    }
    if (num == -1) {
        return undefined
    }

    return array[num];
}

// O(N)
function findDuplicatedIndices_approach2(array) {
  let map = {}

  for (let i = 0; i < array.length; i++) {
    if(!map[array[i]]) {
        map[array[i]] = array[i]
    }
    else {
        return map[array[i]]
    }
  }
}

console.log(findDuplicatedIndices_approach1([2,5,1,2,3,5,1,2,4]))
console.log(findDuplicatedIndices_approach1([2,1,1,2,3,5,1,2,4]))
console.log(findDuplicatedIndices_approach1([2,3,4,5]))

console.log("-------------------------------------------------------")

console.log(findDuplicatedIndices_approach2([2,5,1,2,3,5,1,2,4]))
console.log(findDuplicatedIndices_approach2([2,1,1,2,3,5,1,2,4]))
console.log(findDuplicatedIndices_approach2([2,3,4,5]))
