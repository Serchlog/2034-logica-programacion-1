//Variables
//let numeroSecreto = 6;
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraveces = 'vez';
let maximoIntentos = 3;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor:`));

    console.log(typeof(numeroUsuario));
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