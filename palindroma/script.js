// 1. Creare una variabile dentro la quale viene inserito l'input dell'utente.
// 2. Creare una funzione.
// 3. La funzione verrà definita con un parametro.
// 4. All'interno viene calcolata la lunghezza di una parola (con nome di variabile corrispondente
// a quella del parametro.)
// 5. Verrà utilizzato come punto di controllo la metà della lunghezza della parola.
// 6. Creare una condizione. Se la prima metà è uguale alla seconda metà della parola allora la parola è palindroma, altrimenti non lo è.
// 7. Inserire *return* per passare il risultato  della funzione al di fuori della funzione.
// 8. stampare il risultato della funzione.

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

