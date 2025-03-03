// Definiamo la variabile userWord, contenente la parola dell'utente 
let userWord = prompt("Inserire una parola, verificheremo se sia palindroma o meno");
userWord = userWord.toLowerCase;
//Verifico se la parola inserita corrisponde a quella richiesta

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
//Aggiungo un coltrollo per verificare se la parola inserita è corretta e limito il 
//numero di risposte a 6.
for(i= 0; i<5; i++){
    console.log(userWord);
    if(userWord === "pari" || userWord === "dispari"){
        console.log(isPalindrome(userWord));
        break;
    } else {
        userWord = prompt(`Inserisci il valore corretto! Ti rimangono ${5 - i} tentativi"`);
        userWord = userWord.toLowerCase;
    }
}


