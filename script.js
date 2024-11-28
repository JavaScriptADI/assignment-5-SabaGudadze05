// 1
// Funcitons is one of the main thing in programing languages. We can create functions and write code into it. Its makes our life more easy, because we can use functions several times and we dont need to write codes again and again. We can easily use written functions.
// 2. What is a function call?
// After we create function, we can call it. What calling a function means. We can use functions several times. After we writte allready created function in another line it will execute. When it runs we can easyly say that, function allready called.
// 3. What is a code block, and how does it relate to a function?
// A code block is a group of statements.They will run together and make together work. Like in functions, if-else or in loops

// 4:

const greeting = (user) => {
  console.log(`Hello, ${user}`);
};

greeting("Saba");

// 5:

const reversedString = (word) => {
  reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
};

console.log(reversedString("JSWINNER"));

// What is a default argument, and how does it work?
// When we give function and argument, So if it will be called without getting an argument, it will use default argument. Example:
// const greeting = (user = "Saba") => {
//     console.log(`Hello, ${user}`);
// }
// So if we call function withoug give it an argument, it will use saba and output will be Hello, saba;
// 7. What is the scope and lifetime of a variable?
// Scope is area where variable can be used(acces), and lifetime is how long can variable can be alive. So, if we declare variable in function, its lifetime only lasts, while function is running

// 8. What is a return value?
// Something thats written in functions. So it gives us output, When everything executed in function. Function can return numbers, strings, boolenas and etc.

//9. What is the return value of a function that does not have a return statement?
//Every function has return value. Maybe we do not use it as a statement, but it has it. If we dont use it , it will return as an undefiened, Because we do not used it.
// 10. Given the following function, find mistakes in the code and explain what the function is supposed to do:

// function foo(x) {
//     x * 2;
// }

// let x = 7;
// x = foo(x);
// console.log(x);
// In function is not written return, so it returns nothing and insead of getting double "x" we get undefined in console, so it can be better, if writte retunr in function foo. Here is corrected version:
// function foo(x) {
//    return x * 2;
// }

// let x = 7;
// x = foo(x);
// console.log(x);

// 11. Given the following code, find and correct the mistake in the code:

// function bar(x = 8) {
//   x += 1;
// }

// function foo() {
//   bar();
//   x *= 2;
// }

// let x = 7;
// foo(x);
// console.log(x); // x should change!
// So in this code we have severall erros.Firstly, We dont use return in both function. We should use it in bar and in foo, too. Next, We have local scopes there, bar(x = 8). When we want to call it in foo function we shoul tell bar to use that x which was defined around its scope, then code will work.  Here is corrected code :)

// function bar(x = 8) {
//     x += 1;
//     return x;
//   }
  
//   function foo() {
//     x = bar(x);
//     x *= 2;
//     return x;
//   }
  
//   let x = 7;
//   foo();
//   console.log(x);

// 12

function foo(x) {
    if (x > 5) {
        return x;
    } else {
        return x + foo(x + 1);
    }
}
// If i am correct this type of functions is called "Recursions"
// SO output will 20. Here is why. When 2 is argument for 2, code chekcs if it is above 5 , if not i will return 2 + function(2+1). What does it means. everyone knows that 2 is not greater than five, so programs return else block statement. 2+ and called function again.it will check if inputed value is greated than 5. New value is 2+1(x+2), So it will again returns, 3 + foo(4(x+1)). Program makes same untill number get higher than 5(min 6.) To say easily: 2(first input) + 3(second) + 4(third) + 5(fourth) + 6(Final argument for function beacuse it is higher than 5.) = 20. I hope i explained my answer cleary for you Sir <3

// 13:

const oddSum = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 1) {
            sum += nums[i];
    }
}
    return sum;
}

arrayOFNums = [525, 712, 33, 10, 512, 1005];

console.log(oddSum(arrayOFNums));

// 14: 

const palindrome = (palindromeString) => {
    let firstPart = ""
    let secondPart = ""
    const palidromeLenght = palindromeString.length
    for (let i = 0; i < palidromeLenght / 2; i++){
        firstPart += palindromeString[i];
    }

    if (palindromeString.length % 2 ===1){
        for(let i = palidromeLenght - 1; i >= (palidromeLenght / 2) - 1; i--){
            secondPart += palindromeString[i];
        }
    }else{
        for (let i = palidromeLenght -1; i >= palidromeLenght / 2; i--){
            secondPart += palindromeString[i];
        }
    }
    if (firstPart === secondPart) {
        console.log(firstPart + secondPart);
        return true
    }else{
        console.log(firstPart + secondPart);
        return false
    }
    
}
console.log(palindrome("ABba"));


