const nemo = ['nemo'];
const expansiveArray = new Array(100).fill("nemo");

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'nemo') {
            console.log("Nemo Found!")
        }
    }
}

findNemo(nemo); // O(N) --> Linear Time

// --------------------------------------------------- //

function findFirstBox(boxes) {
    console.log(boxes[0])
}

const twoBoxs = ['Box1', 'Box2']
const arrayBox = new Array(10000).fill("box");

findFirstBox(arrayBox); // O(1) a constant because him operate the something every time (constant) and the proccessing is alway de same

// ------------------------------------------------------- //



