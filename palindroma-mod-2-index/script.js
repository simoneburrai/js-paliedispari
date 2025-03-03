let userWord = prompt("Inserire una parola, vedremo se è palindroma o meno");
userWord = userWord.toLowerCase();

function isPalindrome(word){
    let isPali;
    console.log(word);
    for(i=0; i<word.length - 1; i++)
    if (word[i] === word[(word.length - 1) - i]){
        console.log( word[i], word[(word.length -1) -i]);
        isPali = true;
    }
    else {
        isPali = false;
    }
    return isPali;
}

if(isPalindrome(userWord)){
    console.log("La parola inserita è palindroma");
}else {
    console.log("La parola non è palindroma");
}