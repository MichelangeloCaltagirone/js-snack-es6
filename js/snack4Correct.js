// Prep

// Recupero elementi dal DOM

// Snack3 elements
const listSnack3 = document.getElementById('snack3');
const resultSnack3 = document.getElementById('resultSnack3');
// Snack4 elements
const listSnack4 = document.getElementById('snack4');
const resultSnack4 = document.getElementById('resultSnack4');


// Snack 3

// Variabili note
const bikes = [
  { name:'Specialized', weigth: 9},
  { name:'Pinarello', weigth: 7},
  { name:'BMC', weigth: 6.9},
  { name:'SCOTT', weigth: 6.84},
  { name:'Colnago', weigth: 7.2},
  { name:'Bianchi', weigth: 6.8},
];

// Mostro in pagina la lista di partenza
renderInPageBikes(bikes);

// Fase di elaborazione
// Con il metodo reduce giro tutta la lista, e con 2 accumulatori monto il risultato finale.
// il primo accumulatore servirà per cercare il peso minore tra i valori delle proprietà dell'oggetto(sinsolo elemento dell'array)
// il secondo accumolatore è il messaggio vero e proprio da mostrare in console

const result = bikes.reduce((acc, {name, weigth}) => { // deconstructor per l'lemento oggetto
if(weigth < acc[0]) {
acc[0] = weigth;    
acc[1] = `La bicicletta di marca ${name} è quella dal peso minore, di: ${acc[0]} kg.`;  // template literal
}
return acc;
}, [Infinity, '']);

// Fase di output (in console)
console.log('Tra la seguente lista di biciclette:', bikes);
console.log(result[1]);
// Fase di output in pagina
resultSnack3.innerHTML = result[1];




// Snack 4

// variabili note
let teams = [
    {name:'Roma', score: 0, foul: 0},
    {name:'Napoli', score: 0, foul: 0},
    {name:'Palermo', score: 0, foul: 0},
    {name:'Mantova', score: 0, foul: 0},
    {name:'Saluzzo', score: 0, foul: 0},
    {name:'Real Madrid', score: 0, foul: 0},
    {name:'Torino', score: 0, foul: 0}
  ];

// Fasse di elaborazione
// assegno tramite funzioni nuovi valori alle proprietà degli oggetti
teams.forEach((t) => {
  t.score = randomNumbers(100);
  t.foul = randomNumbers(20);
});

// Fase di output
// Mostro in pagina la lista delle squadre e le loro informazioni
renderInPageTeams(teams);

// Mostro in pagina la lista richiesta, ricostruita con il template literal all'interno della funzione
renderTeamsFoul(teams);