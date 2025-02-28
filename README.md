# Pali e Dispari

## Info 

Nell'esercizio di oggi, salvato come Progetto N.22, andiamo a creare due programmi,
sempre attraverso **Javascript**.

Nel **primo esercizio** bisogna creare un programma in grado di ricevere una parola dall'utente
e riuscire a constatare se la parola inserita sia palindroma o meno.

Nel **secondo esercizio** bisogna chiedere due input da parte dell'utente.

Il primo è di scegliere *Pari* o *Dispari*. 
Il secondo è di inserire un numero.

Il programma successivamente genererà un numero casuale da sommare successivamente al numero dell'utente e constatare poi se sia pari o dispari.

Bisognerà poi stamapre un messaggio se l'utente ha azzeccato o meno.

*Qui di seguito vengono riportati i procedimenti scritti a parola di ogni esercizio*

## Palindroma

#### Consegna Esercizio

    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma

#### Algoritmo 

1. Creare una variabile dentro la quale viene inserito l'input dell'utente.
2. Creare una funzione.
3. La funzione verrà definita con un parametro.
4. All'interno viene calcolata la lunghezza di una parola (con nome di variabile corrispondente
a quella del parametro.)
5. Verrà creata una variabile e tramite un ciclo for invertiremo le lettere della parola, fino a realizzare totalmente la parola invertita.
6. Se la parola è uguale alla sua versione invertita allora la parola è palindroma, altrimenti non lo è.
7. Inserire *return* per passare il risultato  della funzione al di fuori della funzione.
8. stampare il risultato della funzione.

## Pari e Dispari

#### Consegna Esercizio

    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

#### Algoritmo

1. Chiediamo all'utente di inserire pari o dispari tramite un prompt. Inserire il valore dell'utente all'interno di una variabile.
2. Chiediamo all'utente di inserire un numero da 1 a 5 e lo inseriamo all'interno di una variabile.

3. Definiamo una funzione, con un parametro (corrispondente poi al numero inserito dall'utente) all'interno del quale generiamo un numero random da 1 a 5.
4. Sommiamo il numero con un altro numero (ossia l'argomento).
5. Restituiamo il risultato tramite return.

6. Definiamo una funzione all'interno del quale passerà un parametro.
Questo parametro corrisponderà a un numero, il quale dovremmo controllare se sia pari o dispari.
7. Ritorniamo il risultato di valore booleano con return.
8. Controlliamo il valore inserito dall'utente. Se L'utente ha inserito "pari" allora la funzione restituirà true se il numero è pari, o false se non lo è.
Stessa cosa se l'utente ha inserito "dispari".

