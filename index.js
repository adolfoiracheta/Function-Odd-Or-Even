//this is pseudocode
//given an array and what we know
//loop through the array
//numbers[i] gives us each element in our array
//created an empty string
//take elements out of the array and put into a string
//string + 1+2+3+4+5+6+7+8+9+10
//output is going to print "12345678910"

let numbers = [1,2,3,4,5,6,7,8,9,10]
let string = ""
let number = 'chicken'

//sentence and answer are variables that contain the string
let sentence = ' is the'
let answer = ' answer'
//'to and 'life' are just strings
for (let i = 0; i < numbers.length; i++) {
  string = string + numbers[i]
  
} 
  
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      //console.log(i + ' is even')
    }
    else {
      //console.log(i + '  is odd')
    }
  } 

  function checkOddOrEven(blah) {
    if (blah % 2 ===0) {
      console.log(blah + ' is even')
    }
    else if (blah % 2 ===1) {
      console.log(blah + ' is odd')
    }
    else {
      console.log(blah + " is not a number")
    
    }
    
  }
  checkOddOrEven(sentence)