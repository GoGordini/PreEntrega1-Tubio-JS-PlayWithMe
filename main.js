let respuesta = prompt("Hola! Querés jugar conmigo? Respondeme sí o no, porque otra cosa no entiendo!").toLowerCase()
while (respuesta == "no") {
    alert("Ufa, esto me pasa por preguntar!");
    respuesta = prompt("Daleeee! Jugamos? Respondeme sí o no, porque otra cosa no entiendo!").toLocaleLowerCase()
}
while (respuesta != "sí" && respuesta!="si")  {
    respuesta = prompt("Ayyyy! No entendí! Si querés jugar respondeme sí!").toLocaleLowerCase();
    };
let nombre = prompt("Genial! Empecemos! Decime tu nombre:");
alert("OK " + nombre + ". Pensá un número entre 200 y 1000. No me lo digas!");
alert("Cuando lo tengas, multiplicá ese número por 891.");
alert("El resultado que obtuviste es un número de 6 cifras. Guarda una en secreto (no te la olvides, porque la voy a tratar de adivinar!) y decime las otras 5. Las tenés que ingresar de a una, en el orden que vos quieras. Por ejemplo, si el resultado es 106.920 y no me decís el 6, podrías ingresar 1 0 9 2 0, o bien 1 0 2 9 0, o tal vez 0 9 2 0 1, etc.")
let digito1 = parseInt(prompt("Comprendido? Ahora sí, ingresá SOLO UN dígito."))
let digito2 = parseInt(prompt("Ahora otro."))
let digito3 = parseInt(prompt("Y otro."))
let digito4 = parseInt(prompt("Uno más..."))
let digito5 = parseInt(prompt("Ahora el último!"))
alert("Perfecto, ahora voy a hacer mi magia.")
function adivino(num1, num2, num3, num4, num5) {
    let suma_digitos = num1 + num2 + num3 + num4 + num5
    while (suma_digitos >= 9) {
        suma_digitos -= 9
    }
    return 9 - suma_digitos
}
let resultado = adivino(digito1, digito2, digito3, digito4, digito5)
if (resultado != 9) {
    alert("El 6to dígito es el " + resultado + "!")
}
else {
    let era_o_no_era = prompt("El 6to dígito es 0? Respondeme sí o no, porque otra cosa no entiendo.")
    if (era_o_no_era == "no") {
        alert("Ups, error de tipeo. Quise decir 9. Mala mía! El 6to dígito es el 9!")
    }
}
alert("Soy lo máximo. Gracias por jugar conmigo!")




