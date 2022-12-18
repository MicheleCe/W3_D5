/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
num1 = 10
num2 = 20
let sum = num1 + num2
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let randomNumu = Math.floor(Math.random()*10)
console.log(randomNumu);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Michele",
  surname: "Cerqua",
  age: "25"
}
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS", "Javascript"]
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Python")
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice (){
  return Math.floor(Math.random()*6)+1
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger (num3, num4){
  if(num3 > num4) {return num3}
  else {return num4}
}
console.log(whoIsBigger(90, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe (string){
  let arrr = []
  let inArr = string.split(" ")
  arrr.push(inArr)
  return arrr
}
console.log(splitMe("per ora tutto bene"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne (string, boolean){
  if (boolean !== "true"){return string.slice(0, -1)}
  else {return string.slice(1)}
}
console.log(deleteOne("EPICODE", "false"));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  let ceck = string.split("")
  let result = ""
  for (let i = 0; i < ceck.length; i++) {
    if(isNaN(parseInt(ceck[i]))){result += ceck[i]}
  }
  return result
}
console.log(onlyLetters("I bcbcvb77776h7have 999 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(emString){
  if (emString.includes("@" && "." && ".it" && ".com") && !emString.includes(" ")){
    return true}
  else {return false}
}
console.log(isThisAnEmail("njcsdom@dsbvfs.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const d = new Date();
  return day = (d.getDay()+1)
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(tiridemarmellata) {
  let oggetto = {
    sum: 0,
    values: [],
  } 
  for (let i = 0; i < tiridemarmellata; i++) {
    let randomNum = dice()
    oggetto.values.push(randomNum)
    oggetto.sum += randomNum;
  }
  return oggetto
}
console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date2) {
  date2 = new Date(date2)
  const todayDate = new Date();
  const diffTime = Math.abs(date2 - todayDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays + " days";
}
console.log(howManyDays("12/10/1996"));


/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(data) {
  const myBd = new Date("12/10/1996");
  const enteredDate = new Date (data);
  if (myBd.getTime() === enteredDate.getTime()){return true}
  else {return false}
}
console.log(isTodayMyBirthday("12/10/1996"));

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
 // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
 
 /* ESERCIZIO 11
 Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
 in esso la proprietà chiamata come la stringa passata come secondo parametro.
 */
function deleteProp (obj, string) {
  delete obj[string];
  return obj
}
console.log(deleteProp(movies[0], 'Poster'));
/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(obj) {
  let movYears = obj.map((x)=> x.Year).sort().reverse();
  for (let i = 0; i < obj.length; i++) {
      if (obj[i].Year === movYears[0]){
      return obj[i]}   
  }
}
console.log(newestMovie(movies));

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(obj) {
  return obj.length
}
console.log(countMovies(movies));
/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(obj){
  const movYear = obj.map((x)=> x.Year);
  return movYear
}
console.log(onlyTheYears(movies));
/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium (obj){
  let latestMill = []
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].Year > 2000) {
      latestMill.push(obj[i])
    }
  }
  return latestMill
}
console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears (obj){
  let sum = 0
  for (let i = 0; i < obj.length; i++) {
    sum += parseInt(obj[i].Year)
  }
  return sum
}
console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle (obj, string){

   return obj.filter(obj => obj.Title.toLowerCase().includes(string))
}
console.log(searchByTitle(movies, "lord of"));

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(obj, string) {
  const objMatch = obj.filter(obj => obj.Title.toLowerCase().includes(string))
  const objUnmatch =  obj.filter(obj => !obj.Title.toLowerCase().includes(string))
  const match = []
  const unmatch = []
  objMatch.forEach((title) => {match.push(title)})
  objUnmatch.forEach((title) => {unmatch.push(title)})
  return unmatch 
}
console.log(searchAndDivide(movies, "avengers"))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(obj, string) {
  newObjList = []
  for (let i = 0; i < obj.length; i++) {
    if (i !== (parseInt(string))){
      newObjList.push(obj[i])
    }
  }
  return newObjList
  }
console.log(removeIndex(movies, "0"));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
document.getElementById("container")
/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTD = document.querySelectorAll("td")
/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
allTD.forEach((text) => {console.log(text.innerText);})

/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const allUl = document.querySelectorAll("ul")
allUl.forEach((newCol) => {newCol.style.backgroundColor = "red"})
/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
let li = document.createElement('li')
li.innerText = text; 
document.getElementById('myList').appendChild(li);

/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const ulList = document.getElementById("myList")
while (ulList.hasChildElements()) {
  ulList.removeChild(box.lastChild)
}

/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const allTr = document.querySelectorAll("tr")
allTr.forEach((testTr) => {testTr.classList.add("test")})

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/

/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
