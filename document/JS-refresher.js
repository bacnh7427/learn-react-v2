/// For JS

class Human {
  constructor() {
    this.gender = 'male'
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    this.gender ='female';
  }
  
  printMyName() {
    console.log(this.name);
  }
}


const person = new Person();
person.printMyName();
person.printGender();

const multiply = (number) => {
  return number * 2;
}

console.log(multiply(1002))


/// For ES6/Babel
const numbers = [1, 2, 3, 4];
[num1, ,,num3] = numbers;
console.log(num1, num3);

// arrray methods
const numbersArr = [1, 2, 3]
const doubleNumberArray = numbersArr.map((num) => {
  return num * 2
})
console.log(numbersArr);
console.log(doubleNumberArray);


// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.
// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map(number => {
    return {val: number}
   });
}
