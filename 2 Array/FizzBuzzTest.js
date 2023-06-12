// FizzBuzz Test
// Write a fizzbuzz function that returns a vector<string> with the numbers from 1 to n with the following restrictions:

// for multiples of 3 store "Fizz" instead of the number

// for multiples of 5 store "Buzz" instead of the number

// for numbers which are multiples of both 3 and 5 store "FizzBuzz"

// You may use the std::to_string(number) method to convert a number into a string.

function fizzBuzz(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0) arr.push("FizzBuzz");
    else if (i % 3 == 0) arr.push("Fizz");
    else if (i % 5 == 0) arr.push("Buzz");
    else arr.push(String(i))
  }
  return arr
}


console.log(fizzBuzz(15))