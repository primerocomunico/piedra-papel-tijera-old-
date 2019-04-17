let countComputer = 0;
let countPlayer = 0;

// rock = 1;
// papper = 2;
// scissors = 3;

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let suerte = getRandomInt(4, 1);
console.log(suerte);

let enviarRock = document.getElementById("botonRock");
enviarRock.addEventListener("click", playerRock);

function playerRock() {
    if (suerte == 1) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo también escogí  <IMG src='rock.jpg'width="70" height="70" /></h3>`; 
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, QUEDAMOS EMPATE</h2>`;  
    }
    if (suerte == 2) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='papper.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, TE HE GANADO</h2>`;
        countComputer = countComputer + 1; 
    }
    if (suerte == 3) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='scissors.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, ME HAS GANADO</h2>`;
        countPlayer = countPlayer + 1;
    }
    console.log('Computer ' + countComputer);
}

let enviarPapper = document.getElementById("botonPapper");
enviarPapper.addEventListener("click", playerPapper);

function playerPapper() {
    if (suerte == 1) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='rock.jpg'width="70" height="70" /></h3>`; 
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, ME HAS GANADO</h2>`; 
        countPlayer = countPlayer + 1;
    }
    if (suerte == 2) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo también escogí  <IMG src='papper.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, QUEDAMOS EMPATE</h2>`; 
    }
    if (suerte == 3) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='scissors.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, TE HE GANADO</h2>`;
        countComputer = countComputer + 1;
    }
}

let enviarScissors = document.getElementById("botonScissors");
enviarScissors.addEventListener("click", playerScissors);

function playerScissors() {
    if (suerte == 1) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='rock.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, TE HE GANADO</h2>`;
        countComputer = countComputer + 1;
    }
    if (suerte == 2) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo escogí  <IMG src='papper.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, ME HAS GANADO</h2>`;
        countPlayer = countPlayer + 1;
    }
    if (suerte == 3) {
        document.getElementById("respuesta").innerHTML = `<h3>Yo también escogí  <IMG src='scissors.jpg'width="70" height="70" /></h3>`;
        document.getElementById("respuesta02").innerHTML = `<h2>Por lo tanto, QUEDAMOS EMPATE</h2>`; 
    }
}