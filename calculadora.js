const pantalla = document.getElementById("pantalla")
let numero1 = ""
let numero2 = ""
let resultado = ""
let operacion = ""

function agregar(num) {
    pantalla.value += num
}


function operaciones(operador) {
    switch (operador) {
        case "+":
            numero1 = pantalla.value
            pantalla.value = ""
            operacion = "suma"
            break;
        case "-":
            numero1 = pantalla.value
            pantalla.value =""
            operacion = "resta"
            break;
        case "*":
            numero1 = pantalla.value
            pantalla.value =""
            operacion = "multiplicacion"
            break;
        case "/":
            numero1 = pantalla.value
            pantalla.value =""
            operacion = "division"
            break;
        default:
            
            break;
    }
}

function mostrar_resultado(){
    numero2 = pantalla.value
    pantalla.value = ""

    if(operacion == "suma"){
        resultado = parseFloat(numero1) + parseFloat(numero2)
        pantalla.value = resultado
    } else if(operacion == "resta"){
        resultado = parseFloat(numero1) - parseFloat(numero2)
        pantalla.value = resultado
    } else if(operacion == "multiplicacion"){
        resultado = parseFloat(numero1) * parseFloat(numero2)
        pantalla.value = resultado
    } else if(operacion == "division"){
        resultado = parseFloat(numero1) / parseFloat(numero2)
        pantalla.value = resultado
    }
}