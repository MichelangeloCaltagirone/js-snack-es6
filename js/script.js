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



// Snack1

//Prep


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
console.log('La lista per la tipografia è la seguente' ,listXtypography);



// Snack2

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