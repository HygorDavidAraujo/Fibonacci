// comece a criar a sua função add na linha abaixo
function add(number1, number2){
    return number1 + number2;
}

console.log(add(3,5));
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(number1, number2){
    soma = 0;
    for(let i = 0 ; i < number2 ; i++){
        soma = add(soma, number1);
    }
    return soma;    
}

console.log(multiply(5,6));
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(number1, number2){
    resultado = number1;
    for(i = 1 ; i < number2 ; i++){
        resultado = multiply(resultado, number1);
    }
    return resultado;
}
console.log(power(5,2));

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(number1){
    resultado = 1;
    for(i = number1 ; i >= 1 ; i--){
        resultado = multiply(i, resultado);
    }
    return resultado;
}
console.log(factorial(10));

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(number1){
    let n1 = 0;
    let n2 = 1;
    let resultado = 0;
    if(number1 < 2){
        resultado = number1 - 1;
    }else{
        for(let i=2 ; i <= number1 ; i++){
        
        resultado = add(n2, n1);
        n1 = n2;
        n2 = resultado
        
    }
    return resultado;
    }
}

console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
