// Chiedi nome utente

var chiediNome = prompt("Come ti chiami?")
console.log(chiediNome);

// Chiedi cognome

var chiediCognome = prompt("Qual'è il tuo cognome?")
console.log(chiediCognome);

// Chiedo il colore preferito

var chiediColore = prompt("Qual'è il tuo colore preferito?")
console.log(chiediColore);

// Unisco i 3 elementi per formare la password

document.getElementById('password').innerHTML = chiediNome + chiediCognome + chiediColore + "21";
