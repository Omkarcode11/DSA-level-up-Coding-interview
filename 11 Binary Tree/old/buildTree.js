// class Node {
//     constructor(data) {
//         this.data = data
//         this.left = null
//         this.right= null

//     }
// }

// const person = {
//     name : 'jhon bob',
//     user:function(){

//     }
// }

function summation(...numbers) {
  let total = 0;
  numbers.forEach((num) => {
    total =+ num;
  });
  return total;
}

console.log(summation(1, 2, 3));
console.log(summation(1, 2, 3, 4));
