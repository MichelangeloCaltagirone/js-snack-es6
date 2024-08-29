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
// TODO farlo con .reduce

// Variabili note
const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// Dichiaro e inizzializzo la variabile per l'output
let listXtypography = [];

// Fase di Elaborazione
// per ogni elemento nell'array invited
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
console.log('La lista per la tipografia è la seguente' ,listXtypography);



// Snack2

/**
 * Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
 */

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

// preparo la variabile per l'output. Array che conterrà una lista di soli nomi tutti maiuscoli
let newClassNames = [];

// giro tutti gli elementi dell'array noto, ne estrapolo il nome dal valore della key, e lo aggiungo all'array per l'output
students.forEach(s => newClassNames.push(s.name.toUpperCase()));

// Fase di output in console
console.log('La lista di nomi per la nuova classe è:', newClassNames);


// Certo chi ha una somma dei voti maggiore a 70
const grades70High = students.filter(s => {
    if(s.grades > 70) return true;
    else return false
});

// Mostro output
console.log('Questi sono gli studenti con una somma di voti superiore a 70', grades70High);

// Cerco chi ha  una somma di voti superiore a 70 e id superiore a 120
const id120PlusGrades = students.filter(s => {
    if(s.grades > 70 && s.id > 120) return true;
    else return false; 
});

// mostro output
console.log('Lista degli studenti con somma voti maggiore di 70 e id maggiore di 120', id120PlusGrades);