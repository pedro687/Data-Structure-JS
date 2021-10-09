const matriz = [[1,2], [3,4], [5,6]];

function getMatriz(arr) {
    arr.forEach(e1 => {
      e1.forEach(e2 => {
          console.log(e2);
      })
    });
}

getMatriz(matriz); // O(n^n) function