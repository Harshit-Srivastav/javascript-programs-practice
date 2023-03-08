// Star Pattern Program
for(let i = 1; i<=5; i++){
    for(let j=1;j<=i;j++) {
        document.write('*')
    }
    document.write('<br/>')
}
// Star Patten with console.log('')
document.write('<br/>')
for(let i = 1; i<=5; i++){

    for(let j=1;j<=i;j++) {
        console.log('*')
    }
   console.log('\n')
}
//  Pattern 2
document.write('<br/>')
for(let i = 5; i >= 1; i--){
    for(let j=1;j<=i;j++) {
        document.write('*')
    }
    document.write('<br/>')
}
//  Pattern 3
document.write('<br/>')
for(let i = 1; i<=5; i++){
    for(let j=1;j<=i;j++) {
        document.write(j)
    }
    document.write('<br/>')
}
//  Pattern 4
document.write('<br/>')
for(let i = 5; i >= 1; i--){
    for(let j=1;j<=i;j++) {
        document.write(j)
    }
    document.write('<br/>')
}
//  Pattern 5
document.write('<br/>')
for(let i = 1; i<=5; i++){
    for(let j=1;j<=i;j++) {
        document.write(i)
    }
    document.write('<br/>')
}
//  Pattern 6
document.write('<br/>')
for(let i = 5; i >= 1; i--){
    for(let j=1;j<=i;j++) {
        document.write(i)
    }
    document.write('<br/>')
}

// Check Missing Number Program 
const arr = [10,9,8,7,1,2,5,4]
function chkMissingNumber(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) {
            max = arr[i]
        }
    }
    let newArr = []
    for(let i= 1;i<max;i++){
        if(arr.indexOf(i)===-1){
            newArr.push(i)
        }
    }
    return newArr
}

console.log(chkMissingNumber(arr))


// Capitalize the first letter of String JavaScript

function capitalizeFirstLetterOFAString(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalizeFirstLetterOFAString("happy"))

// Reverse a String - JavaScript

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('happy'))

// Longest Word in a String - JavaScript

function checkLongestWord(str) {
   let longestWord = str.split(' ').sort((a, b) => b.length - a.length)[0]
   return longestWord
}

console.log(checkLongestWord('How are you my Friend'))

// Count Words in a String - JavaScript

function countWords(s) {
    return s.split(' ').length
}

console.log(countWords('How are you my Friend'))
console.log(countWords('How are you my Friend'))

// Count Number of Duplicate Elements JavaScript

function CountDuplicateElements(arr) {
    let count = 0;
    for(let i = 0;i < arr.length;i++){
        for(j = i+1; j< arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
                break;
            }
        }
    }
    return count
}

console.log(CountDuplicateElements(['aa', 'bb', 'aa', 'ccc', 'dd','dd']))

// Removing an Specific Item from an Array

function removeItem(arr, value){
    const i = arr.indexOf(value)
    if(i > -1){
        arr.splice(i, 1)
    }
    return arr
}

console.log(removeItem([2,4,5], 2))

// Count Number of Elements

function countNumberOfElements(arr){
    let count = {}
    for(let i = 0;i< arr.length;i++){
        let num = arr[i]
        count[num] = count[num] ? count[num] + 1: 1
    }
    return count
}

console.log(countNumberOfElements([2,3,4,5,7,2,5]))

// Get Distinct Elements

function getDistinctElements(arr){
    let unique = []
    for(let i = 0; i< arr.length;i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i])
        }
    }
    return unique
}
console.log(getDistinctElements([2,4,5,2,7,4]))