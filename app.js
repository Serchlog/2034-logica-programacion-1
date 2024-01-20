//Variables
//let numeroSecreto = 6;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraveces = 'vez';
let maximoIntentos = 3;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertaste, fué verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor")
        }
        intentos ++;
        //palabraveces = "veces"
        
        if (intentos>maximoIntentos) {
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        }
        
        //La condición no se cumplió
        //alert("Lo siento, no acertaste el número");
    }
}