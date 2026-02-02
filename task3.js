/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */

function string(str){
    let count = 0;
    const vowels ='aeiouAEIOU';
     for(let i = 0; i < str.length; i++){
     if(vowels.includes(str[i])){

      count++;
     }

     }
    return count;
}

const names =string('Bangladesh is a beautiful country.');
console.log(names);