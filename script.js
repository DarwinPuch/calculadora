function sumar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML =
    "Resultado: " + (n1 + n2);
}

function restar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML =
    "Resultado: " + (n1 - n2);
}

function multiplicar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML =
    "Resultado: " + (n1 * n2);
}

function dividir(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    if(n2 == 0){
        document.getElementById("resultado").innerHTML =
        "No se puede dividir para cero";
    }else{
        document.getElementById("resultado").innerHTML =
        "Resultado: " + (n1 / n2);
    }
}

function potencia(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML =
    "Resultado: " + Math.pow(n1,n2);
}

function factorial(){
    let n = parseInt(document.getElementById("num1").value);

    let fact = 1;

    for(let i=1;i<=n;i++){
        fact *= i;
    }

    document.getElementById("resultado").innerHTML =
    "Factorial: " + fact;
}

function calcularEdad(){

    let fechaNacimiento =
    new Date(document.getElementById("fechaNacimiento").value);

    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())){
        edad--;
    }

    document.getElementById("edadResultado").innerHTML =
    "Tu edad es: " + edad + " años";
}