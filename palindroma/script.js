// Definiamo la variabile userWord, contenente la parola dell'utente 
let userWord = prompt("Inserire una parola, verificheremo se sia palindroma o meno");
userWord = userWord.toLowerCase();

function isPalindrome(word){
    // variabile con lunghezza della parola
     const wordLength = word.length;
    //seconda parola, ma reversed
    let reversedWord = "";
    for (i= wordLength -1; i >= 0; i--){
        reversedWord += word[i];
    }
    console.log("La parola inserita è:", word);
    console.log("La parola al contrario è:", reversedWord);
    // Controllo se le due metà sono uguali, restituisco una stampa 
    if(word === reversedWord){
        console.log("La parola è palindroma");
        return true;
    } else {
        console.log("Mi dispiace, la parola non è palindroma");
        return false;
    }
}

// Richiamo la funzione con argomento la parola dell'utente 
console.log(isPalindrome(userWord));

