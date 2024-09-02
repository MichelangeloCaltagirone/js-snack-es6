// RandomNumbers
// funzione che se invoca ritorna un numero casuale arrotondato tra 1 e max, argomento da passargli

const randomNumbers = (max) => Math.floor(Math.random() * max) + 1;


// renderInPage Bikes
// funzione per creare in pagina tanti <li> quanti sono gli
// elementi di un array, inserendo key and value degli oggetti
// nell'array.
const renderInPageBikes = (array) => {
    array.forEach(x => {
        listSnack3.innerHTML += `<li>- Nome marca: ${x.name}, peso in kg: ${x.weigth}</li>`;
    });
};


// renderInPage Teams

const renderInPageTeams = (array) => {
    array.forEach(x => {
        listSnack4.innerHTML += `<li>- Nome squadra: <span class='squad'>${x.name}</span> - Punti totali: <span class='score'>${x.score}</span> - Falli subiti: <span class='foul'>${x.foul}</span></li>`;
    });
};

const renderTeamsFoul = (array) => {
    array.forEach(({name, foul}) => {
        resultSnack4.innerHTML += `<li>- Nome squadra: <span class='squad'>${name}</span> - Falli subiti: <span class='foul'>${foul}</span></li>`;
    });
};