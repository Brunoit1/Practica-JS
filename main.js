const nombres1 = [

    {
        id:1,
        nombre:"Bruno",
    },

    {
        id:2,
        nombre:"Mariano",
    },

    {
        id:3,
        nombre:"Thiara"
    },

    {
        id:4,
        nombre:"Martin",
    }


]


const imprimirNombresm = () => nombres1.forEach((articulo) => {
    if (articulo.nombre.includes("M")) {
     return console.log(`Los nombres con la letra M son : ${articulo.nombre}`)
    }
    
    
});

// imprimirNombresm()


// const arrayNumeros = [2,22,1,57,69,7,8,2,3,11,23]

// const imprimirNumeros = () => arrayNumeros.forEach ((numero1,numero2) => {

//     numero1=10
//     numero2=100

//     if(arrayNumeros < numero1) {
//         return 
//     }


// }
// )

// imprimirNumeros ()

// let guardarVariables = prompt("Ingresa tus nombres");

// let arrayVariables = guardarVariables.split(" ");

// let imprimirNombres = () => {
//     alert (`el primer es ${arrayVariables[0]} y el segundo valor es ${arrayVariables[1]}`)
// }
// imprimirNombres()


const edad18 = (edad) => {
    if (edad >= 18) {
        console.log("Soy mayor de edad")
    }
    else
        {console.log("Soy menor de edad")}
}

// edad18(18);


let valores = (valor1,valor2) => {
    if (valor1 > valor2) {
        console.log ("valor 1 es mayor a valor 2")
    }
    else if (valor2 > valor1) {
        console.log ("valor 2 es mayor a valor 1")
    }
    else{
        console.log ("son iguales")
    }
}


// valores(0,10)


// let string = prompt("ingresa un string") 

// let guardarstring = (nombre) => {
//     if (nombre == "alerta") {
//         alert("soy una alerta")
//     }
//     else if (nombre == "consola"){
//         console.log("soy un mensaje en consola")
//     }
//     else {
//         alert("me muestro en ambos lados")
//         console.log("me muestro en ambos lados")
//     } 


// }




// guardarstring(string)



const edad = (numero) => {
    if (numero < 13) {
        console.log ("Soy un niño")
    }
    else if (numero < 20 && numero >= 13){
        console.log("Soy un adolescente")
    }
    else if (numero >= 20 && numero <= 50){
        console.log("Soy un adulto")
    }
    else {
        console.log("Soy un adulto mayor")
    }
}

// edad(22)


const frutas = (fruta) => {

    switch (fruta){
        case "Manzana":{
            console.log(`Soy una ${fruta}`)
            break;
        }
        
        case "Frutilla":{
            console.log(`Soy una ${fruta}`)
            break;
        }

        case "Kiwi":{
            console.log(`Soy una ${fruta}`)
            break;
        }

        case "Banana":{
            console.log(`Soy una ${fruta}`)
            break;
        }

        default:{
            console.log("Nose que soy")
            break;
        }
    }
    
}

// frutas("hduiw")



const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

// for donde comienza (i= 0), donde termina (i < 10) y la forma en como avanza (i++)

let imprimirNumeros = () => {

    for(let i = 0; i < 10; i++){
       console.log(arrayNumeros[i])
    }


}

// imprimirNumeros()


let imprimirNumeros5 = () => {

    for(let i = 0; i < 5; i++){
       console.log(arrayNumeros[i])
    }


}

// imprimirNumeros5()

let imprimirNumerosultimos5 = () => {

    for(let i = 5; i < 10; i++){
       console.log(arrayNumeros[i])
    }


}


// imprimirNumerosultimos5()


let imprimirNumerosmenos4 = () => {

    for(let i = 0; i < 10; i++){

        if (i != 3) {
            console.log(arrayNumeros[i])
        }


       

    
    }

}

// imprimirNumerosmenos4()


const consolaNombre = (nombre) => {
    console.log(`${nombre}`)
}

// consolaNombre("Agustin")


const sumarNumeros = (a,b) => {
    console.log(`La suma es: ${a + b}`)
}


// sumarNumeros(10,20)

const multiplicarNumeros = (a,b) => {
    console.log(`La multiplicación es: ${a * 2 + b * 2}`)
}

// multiplicarNumeros(3,4)

const tabladel9 = (numero) => {
    for(let i = 1; i<=10; i++){
        console.log(`la tabla es: ${numero * i}`)
    }
}

// tabladel9 (9)

const numerosIntervalos = (numero1,numero2) => {

    if(numero1 == numero2) {
        console.log("ambos numeros son iguales")
    }
    else{
    for(let i = numero1; i<=numero2; i++){
        console.log(`El intervalo es: ${i}`)
    }
}
}

// numerosIntervalos(20,20)


const multiplicarNumeros2 = (a,b) => {
    console.log(`La multiplicación es: ${a * b }`)
}


const sumarNumeros2 = (a,b) => {
    console.log(`La suma es: ${a + b}`)
}


const restarNumeros = (a,b) => {
    console.log(`La resta es: ${a - b}`)
}


const dividirNumeros = (a,b) => {
    console.log(`La división es: ${a / b}`)
}


const calculadora = (a,b,operacion) => {

  operacion(a,b)
}

// calculadora(10,20,multiplicarNumeros2)



let helados = ["chocolate","frutilla","vainilla","granizado","menta granizada"]


// const sustituto = helados[0]
// helados[0]=helados[4]
// helados[4]=sustituto



// console.log(helados)


// helados.push("crema del cielo")

// console.log(helados)


const eliminarHelados = () => {
    let variable = helados.shift()
    helados.push(variable)
    console.log(helados)
}
    
// eliminarHelados()

const invertir = () => { 
    helados.reverse()
    console.log(helados.join("-"))

}

// invertir()


let helados2 = ["tramontana","kinotos al whisky","cereza",]



const arrayHelados = () =>{


    let heladosC1 = helados.slice((helados.length)-2)
    let heladosC2 = helados2.pop()

    console.log(heladosC1.concat(heladosC2))
   
    


}

// arrayHelados()


const tresletras = () => {
    let cambio = helados.map(elemento => elemento.toUpperCase().slice(0,3))
    console.log(cambio)
    

}


// tresletras()



let frase = "         .levin us ed sojel yum atse isseM y odnum led rodaguj rojem le se odlanoR     "

let arreglarfrase = () => {
    let nuevafrase = frase.trim().split('').reverse()
    for(elemento of nuevafrase){
        if(elemento=="Messi"){
            elemento="Ronaldo"
        }
        if(elemento=="Ronaldo"){
            elemento="Messi"
        }
    }
    console.log(nuevafrase.join(""))

   
}
arreglarfrase()
