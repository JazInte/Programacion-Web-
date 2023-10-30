// Función para elevar una base a una potencia
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Función para obtener el número mayor entre dos números
function getLargerInt(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

// Función para generar una secuencia de Fibonacci
function fibonacciSequence(limit) {
    let sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}

// Función para calcular el promedio de un arreglo de números
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

// Ejemplos de uso de las funciones
let resultado1 = power(2, 3); // Retorna 8
let resultado2 = getLargerInt(5, 8); // Retorna 8
let resultado3 = fibonacciSequence(10); // Retorna un arreglo con los primeros 10 números de la secuencia de Fibonacci
let resultado4 = calculateAverage([1, 2, 3, 4, 5]); // Retorna el promedio de los números en el arreglo

// Imprimir los resultados en la consola
console.log(`El resultado de 2 elevado a la potencia de 3 es ${resultado1}`);
console.log(`El número mayor entre 5 y 8 es ${resultado2}`);
console.log(`Los primeros 10 números de la secuencia de Fibonacci son: ${resultado3}`);
console.log(`El promedio de los números 1, 2, 3, 4, 5 es ${resultado4}`);
