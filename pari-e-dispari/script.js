
userValue = prompt("Inserisci 'pari' o 'dispari'");
console.log("Il valore da te inserito è", userValue);
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5 (compreso"));
console.log("Il numero da te inserito è", userNumber);

function randomAndSum(number){
    randomNumber = Math.round((Math.random() * (4)) + 1);
    console.log("Il numero random è", randomNumber);
    const sum = randomNumber + number;
    return sum;
}

sumOfNumbers = randomAndSum(userNumber);
console.log(`La somma del tuo numero e il numero random è ${sumOfNumbers}`);

function evenOrOdd(number){
    const isEven = (number % 2) === 0;
    if(isEven){
        return true;
    } else {
        return false;
    }
}
console.log(evenOrOdd(sumOfNumbers));
userEven =  userValue === "pari" && evenOrOdd(sumOfNumbers) === true ;
userOdd = userValue === "dispari" && evenOrOdd(sumOfNumbers) === false;

if (userEven || userOdd) {
    console.log("Bravo, hai indovinato, la somma dei due numeri è", userValue);
} else {
    console.log("Stavolta ho vinto io, ritenta");
}