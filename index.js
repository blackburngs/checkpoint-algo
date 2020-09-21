let vowels = ['a', 'e', 'i', 'o', 'u' ]
let nVowels = 0
let sentence;
let Char = 0;
let Space = 0;

    
    do{
            sentence = prompt();
            Char++
        if(vowels.indexOf(sentence) !== -1){
            nVowels++
        } 
        if(sentence === ' '){
           Space = Space + 1;
        }
    } while (sentence!==".")

    
console.log("Number of characters : ", Char)
console.log("Number of words : ", Space + 1)
console.log("Number of vowels : ", nVowels) 