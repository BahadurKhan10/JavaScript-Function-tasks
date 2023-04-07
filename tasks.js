
// 1 Write a program that prints the sum of all even numbers from 1 to 100.

let sum=0

for(let i=0; i<=100; i++){
    if(i%2==0){
        sum+=i
    }
}console.log(`Sum of even numbers between 1 and 100 is: ${sum}`)


// Making a function where we will give range and it will automatically sum even numbers between given range

function sumEven(num1,num2){
    sum=0
    for(let i=1; i>=num1 && i<=num2; i++){
        if(i%2==0){
            sum+=i
        }
    }return `Sum of even numbers between 1 and 100 is: ${sum}`
}

x=sumEven(1,100)
console.log(x)



// 2 Write a program that takes a string as input and prints its reverse. For example, if the input is "hello", the output should be "olleh".

function reverse(str){
    let reversed=''
    for(let i=str.length -1; i>=0; i--){
        reversed+=str[i]
    }
    return reversed
}
console.log(reverse("Hello"))



// 3 Write a program that finds the factorial of a number. For example, if the input is 5, the output should be 120 (1 * 2 * 3 * 4 * 5).

function factorial(num){
    let nums=1
    for(let i=1; i<=num; i++){
        nums*=i
    }
    return nums
}

console.log(factorial(5))



// 4 Write a program that takes an array of numbers as input and prints the largest and smallest numbers in the array.

function ArrNum(numbers){
    const max= Math.max(...numbers)
    const min=Math.min(...numbers)
    return `Largest number is ${max} \n Smalled number is ${min}`
}

console.log(ArrNum([7,1,10,55,6,3,8,2,9]))



// 5 Write a program that takes a number as input and checks whether it is a prime number or not.

function primeNum(num){
    if(num<=1){
        return false
    }
    for(i=2; i<=Math.sqrt(num); i++){
        if(num%i ===0){
            return false
        }
    }
    return true
    
}

console.log(primeNum(7))
console.log(primeNum(8))
console.log(primeNum(3))
console.log(primeNum(1))



// 6 Write a program that prints the Fibonacci sequence up to a given number. For example, if the input is 10, the output should be "0, 1, 1, 2, 3, 5, 8".

function Fibonacci(num){
  prev=0
  curr=1
  fib=[prev,curr]
  while(curr<num){
    next=prev+curr
    fib.push(next)
    prev=curr
    curr=next
    if(next>num){
      fib.pop()    //to remove last num if it is greater than our input               
    }              // (input 10 will also print 13 in the output)
  }
  return fib.join(', ' )
}
console.log(Fibonacci(10))



// 7 Write a program that takes a string as input and counts the number of vowels in the string.

function countVowel(str){
  let sum=0
  for(let i=0; i<=str.length-1; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      sum++
    }
  }return `Num of vowels in ${str} is: ${sum}`
}
console.log(countVowel('BahadurKhanSwati'))
console.log(countVowel('Compatible'))



// 8 Write a program that takes a number as input and prints the sum of its digits. For example, if the input is 123, the output should be 6 (1 + 2 + 3).

function sumNum(number){
  sum=0
  numStr=number.toString()
  for(i=0; i<numStr.length; i++){
    sum += parseInt(numStr[i])
  }
  return sum
}

console.log(sumNum(123))



// 9 Write a program that takes an array of numbers as input and prints the smallest number in the array.
function smallestNum(numbers){
  numbers.sort(function(a,b){
    return a-b                  //Sorting in ascending order
  })
  return `Smallest number is: ${numbers[0]}`
}
console.log(smallestNum([2,1,9,54,5]))


// 10 Write a program that takes an array of numbers as input and prints the 2nd smallest number in the array.
function secSmallestNum(numbers){
  numbers.sort(function(a,b){
    return a-b                //Sorting in ascending order
  })
  return `Second Smallest number is: ${numbers[1]}`
}
console.log(secSmallestNum([2,1,9,54,5]))



// 11 Write a program that takes an array of numbers as input and prints the highest number.

function highesNum(numbers){
  numbers.sort(function(a,b){
    return b - a               //Sorting in decending order
  })
  return `Highest number is: ${numbers[0]}`
}
console.log(highesNum([2,1,9,54,5]))



// 12 Write a program that takes an array of numbers as input and prints the second largest number in the array.

function secLargNum(numbers){
  numbers.sort(function(a,b){
    return b-a                //Sorting in decending order
  })
  return `Second Largest number is: ${numbers[1]}`
}
console.log(secLargNum([2,1,9,54,5]))





