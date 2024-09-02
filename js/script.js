/**
 * *SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.

*SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/



// Snack 1

//Prep

/*
// Variabili note
const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// Col metoro reduce, creo un elemento che desidero e lo popolo basandomi sugli elementi di un array, manipolandoli
const listXtypography = invited.reduce((acc, g, i) => {
    guestListed = {
        // creo un oggetto rappresentante l'elemento con le seguenti proprietà:
                    tableName: 'Tavolo Vip',
                    guestName: g,
                    place: i + 1
                  };
    acc.push(guestListed);
    return acc;
}, []);

// Dichiaro e inizzializzo la variabile per l'output
//let listXtypography = [];

// Fase di Elaborazione
// per ogni elemento nell'array invited
/*
invited.forEach((g, i) => {
    //prendo l'elemento stesso(g), e il suo indice(i) dai parametri della funzione di callBack
    guestListed = {
    // creo un oggetto rappresentante l'elemento con le seguenti proprietà:
                    tableName: 'Tavolo Vip',
                    guestName: g,
                    place: i + 1
                  }
    // aggiungo l'oggetto alla lista di output    
    listXtypography.push(guestListed);
});
// Mostro l'output in console
*/
//console.log('La lista per la tipografia è la seguente' ,listXtypography);



// Snack 2

// Prep 

// Variabili note
const students = [
                  {
                    id: 213,
                    name: 'Marco della Rovere',
                    grades: 78
                  },
                  {
                    id: 110,
                    name: 'Paola Cortellessa',
                    grades: 96
                  },
                  {
                    id: 250,
                    name: 'Andrea Mantegna',
                    grades: 48
                  },
                  {
                    id: 145,
                    name: 'Gaia Borromini',
                    grades: 74
                  },
                  {
                    id:196,
                    name: 'Luigi Grimaldello',
                    grades: 68
                  },
                  {
                    id: 102,
                    name: 'Piero della Francesca',
                    grades: 50
                  },
                  {
                    id: 120,
                    name: 'Francesca da Polenta',
                    grades: 84
                  },
];

// Fase di elaborazione

// Creo un nuovo array basandomi sugli elementi(oggetti) di un altro array, andando a prelevare il valore di una specifica key
//const newClassNames = students.map(s => s.name);

// Cerco chi ha una somma dei voti maggiore a 70
//const grades70High = students.filter(s => s.grades > 70);

// Cerco chi ha una somma di voti superiore a 70 e id superiore a 120
//const id120PlusGrades = students.filter(s => s.grades > 70 && s.id > 120);

// Fase di Output (in console)
//console.log('La lista di nomi per la nuova classe è:', students.map(s => s.name.toUpperCase()));
//console.log('Questi sono gli studenti con una somma di voti superiore a 70', students.filter(s => s.grades > 70));
//console.log('Lista degli studenti con somma voti maggiore di 70 e id maggiore di 120', students.filter(s => s.grades > 70 && s.id > 120));



// Versione col metodo .reduce()
/*
const listsStudents = students.reduce((acc, s) => {
    acc[0].push(s.name.toUpperCase());
    if (s.grades > 70) acc[1].push(s);
    if (s.grades > 70 && s.id > 120) acc[2].push(s);
    return acc;
}, [[], [], []])

console.log('La lista di nomi per la nuova classe è:', listsStudents[0]);
console.log('Questi sono gli studenti con una somma di voti superiore a 70', listsStudents[1]);
console.log('Lista degli studenti con somma voti maggiore di 70 e id maggiore di 120', listsStudents[2]);


console.log(students.reduce((acc, s) => {
    acc[0].push(s.name.toUpperCase());
    if (s.grades > 70) acc[1].push(s);
    if (s.grades > 70 && s.id > 120) acc[2].push(s);
    return acc;
}, [[], [], []]));

*/



// Snack 3

// Prep
//Recupero elementi dal DOM
const listSnack3 = document.getElementById('snack3');
const resultSnack3 = document.getElementById('resultSnack3');

// Variabili note
const bikes = [
                { name:'Specialized', weigth: 9},
                { name:'Pinarello', weigth: 7},
                { name:'BMC', weigth: 6.9},
                { name:'SCOTT', weigth: 6.84},
                { name:'Colnago', weigth: 7.2},
                { name:'Bianchi', weigth: 6.8},
              ];
// Mostro in oagina la lista di partenza
//renderInPageBikes(bikes);
// Fase di elaborazione

// Con il metodo reduce giro tutta la lista, e con 2 accumulatori monto il risultato finale.
// il primo accumulatore servirà per cercare il peso minore tra i valori delle proprietà dell'oggetto(sinsolo elemento dell'array)
// il secondo accumolatore è il messaggio vero e proprio da mostrare in console
/*
const result = bikes.reduce((acc, {name, weigth}) => {
  if(weigth < acc[0]) {
    acc[0] = weigth;    
    acc[1] = `La bicicletta di marca ${name} è quella dal peso minore, di: ${acc[0]} kg.`;
  }
  return acc;
}, [Infinity, '']);

// Fase di output (in console)
console.log('Tra la seguente lista di biciclette:', bikes);
console.log(result[1]);
// Fase di output in pagina
resultSnack3.innerHTML = result[1];




// Snack 4

/**
 * *SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 */

/**Scaletta
 * -creo array di dati (oggetti; prpietà: name:'', score: 0, foul: 0)
 * -giro per tutta la lista di oggetti, assegnando valori random a tutte le propietà con valore di numero
 * -creo nuovo array contenente le squadre tranne una loro propietà(score)
 */
// Prep
// Recupero elementi dal DOM
const listSnack4 = document.getElementById('snack4');
const resultSnack4 = document.getElementById('resultSnack4');
// Variabili note
let teams = [
                {name:'Roma', score: 0, foul: 0},
                {name:'Napoli', score: 0, foul: 0},
                {name:'Palermo', score: 0, foul: 0},
                {name:'Mantova', score: 0, foul: 0},
                {name:'Saluzzo', score: 0, foul: 0},
                {name:'Real Madrid', score: 0, foul: 0},
                {name:'Torino', score: 0, foul: 0}
              ];

              /*
console.log('Le squadre e i loro dati sono i seguenti:');
// aseegno tramite funzioni nuovi valori alle proprietà degli oggetti
teams.forEach(t => {  // TODO da fare con il constructor
  t.score = randomNumbers(100);
  t.foul = randomNumbers(20);
});

console.log(teams);
// Mostro in pagina la lista delle squadre e le loro informazioni
renderInPageTeams(teams);

console.log('La lista delle squadre, con nome e numero di falli subiti:')
const teamsFoul = teams.map(t => {
  return {name:t.name, foul:t.foul}
});

renderTeamsFoul(teamsFoul);
*/

/**
 * ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

// prep

// variabili note
/* 
let names = ['pippo', 'PLUTO', 'Paperino'];



for ( let i = 0; i < names.length; i++) {
  // Primo step: formatto tutte le lettere in minuscolo
  names[i] = names[i].toLowerCase();
  console.log(names[i]);
  // Ricostruisco la formattazione che mi serve: con charAt(0) e poi upperCase, prendo la prima lettera e la capitolizzo
  // poi con slice(1) riprendo la parola e la monto con la sua parte restante dopo la prima lettera
  names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
};

console.log(names);

*/

//ES6 Snack 6
/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'cobra', famiglia: 'serpenti', classe: 'sangueFreddo'},
  { nome: 'rinoceronte', famiglia: 'corazzati', classe: 'mammiferi'},
  { nome: 'ippopotamo', famiglia: 'acquatici', classe: 'mammiferi'},
  { nome: 'drago', famiglia: 'dragonidi', classe: 'uccelli'},
  { nome: 'moffetta', famiglia: 'castoridi', classe: 'mammiferi'},
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'},
  { nome: 'squalo', famiglia: 'squalidi', classe: 'pesci'},
  { nome: 'medusa', famiglia: 'invertebrati', classe: 'pesci'}
]
console.log(animals);
let mammiferi = [];
for (const animal of animals) {
  if (animal.classe == 'mammiferi') mammiferi.push(animal);
};
console.log(mammiferi);

const mammiferix = animals.filter(a => a.classe == 'mammiferi');
console.log(mammiferix);


// ES6 Snack 7 
/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome
e l'indicazione se può guidare, in base all'età.
*/

const persons = [
  {name: 'Pippo', surname: 'Nostrum', age: 22},
  {name: 'Pluto', surname: 'Regan', age: 6},
  {name: 'Sofia', surname: 'Latium', age: 18},
  {name: 'Gian', surname: 'Pietro', age: 7},
  {name: 'Tom', surname: 'Waits', age: 45},
  {name: 'Jimi', surname: 'Hendrix', age: 102}
];

let personsCanDrive = [];
persons.forEach(({name, surname, age}) => {
  const canDrive = age < 18 || age > 68 ? 'non ': '';
  personsCanDrive.push(`La persona di nome ${name} e cognome ${surname},${canDrive} può guidare, avendo ${age} anni.`);
  console.log(`La persona di nome ${name} e cognome ${surname}, e ${canDrive} può guidare, avendo ${age} anni.`);
});

console.log(persons);
console.log(personsCanDrive);