// PART 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(num){
  const result = num * num;
    console.log(`The result of squaring the ${num} is ${result}.`);
  return result;
}

squareNumber(3);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(num){
  const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
  return result;
}

halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2){
  const result = num1 / num2 * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

percentOf(2, 4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle =  function(radius){
  const result = Math.round((radius * radius * Math.PI)*100)/100;
    console.log(`The area for a circle with radius ${radius} is ${result}.`);
    return result;
}

areaOfCircle(2);

// PART 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const theCalculator = function(num){
      const halfNumber = num / 2;
      const squareNumber = halfNumber * halfNumber;
      const areaOfCircle = Math.round((squareNumber*squareNumber*Math.PI)*100)/100;
      const percentCalc = (areaOfCircle / squareNumber) * 100;
      console.log(`${percentCalc}%`);
    return percentCalc;
}

theCalculator(2);
