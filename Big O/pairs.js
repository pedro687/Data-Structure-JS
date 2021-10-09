const boxes = [1,2,3,4,5]

function getPairs(boxesArray) {
    boxesArray.forEach(element => {
        if (element % 2 == 0) {
            console.log(element);
        }
    });
}

getPairs(boxes);

// ------------- //

const arr = ['a', 'b', 'c', 'd', 'e']

function getPairsOfArrayFor(boxs) {
    for (let i = 0; i < boxs.length; i++) {
        for (j = 0; j < boxs.length; j++) {
            console.log(boxs[i] + " " + boxs[j]);
        }
    }
}

function getPairsOfArrayWithForeach(arr2) {
    arr2.forEach(e1 => {
        arr2.forEach(e2 => {
            console.log(e1 + " " + e2)
        })
    })
}

//getPairsOfArray(arr);

getPairsOfArrayWithForeach(arr) // This function is O(N^N) because have a for inside other for