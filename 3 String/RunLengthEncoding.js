// Run Length Encoding
// Write a function to perform basic string compression using the counts of repeated characters, also known as Run Length Encoding. Let see one example, the input string "aaaabcccccaaa" would become "a4b1c5a3". If the "compressed" string would not become smaller than the original string, your function should return the input string. You can assume the string has only uppercase and lowercase letters. You may use the to_string(int) method to convert an integer into string.

// Sample Inputs

// bbbaaaadexxxxxx
// abc
// Sample Outputs

// b3a4d1e1x6
// abc


function compressing(str){
    let count =  1 
    let comStr = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i]==str[i+1]){
            count++
        }else{
            comStr += str[i]+count
            count =1
        }
    }
    if(str.length>comStr.length){
        return comStr
    }else{
        return str
    }
}


console.log(compressing('aaaabcccccaaa'))
console.log(compressing('abc'))