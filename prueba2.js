/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string. 
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementAndFormat(input) {




}

console.log(incrementAndFormat('10109'));


function incrementString(strng) {
    const arrayLe = strng.split('').filter(letra => letra.match(/[a-z]/i))
    const arrayNum = strng.split('').filter(numero => numero.match(/[0-9]/))

    let suma = (parseInt(arrayNum.join(''))+1)
    let nuevo = (suma.toString()).padStart(arrayNum.length,0)

    if ( isNaN(Number(strng.slice(-1))) ) {
        return strng + 1
    } 
        
    
    return arrayLe.join('') + nuevo

}

console.log('hola'.slice(-1));
console.log(incrementString('hola123'));
console.log(incrementString('foo9'));
console.log(incrementString('foobar000'));
console.log(incrementString('foo'));
console.log(incrementString('foo0042'));
console.log(incrementString('fo99obar99'));


/* 
function incrementString(strng) {
    const arrayLe = strng.split('').filter(letra => letra.match(/[a-z]/i))
    const arrayNum = strng.split('').filter(numero => numero.match(/[0-9]/))
    const todo = strng.split('')

    if (isNaN(parseInt(todo.slice(-1)))) {
        return strng + 1
    }
    let siescero=[]
    if (arrayNum[0] === 0) {
        
    }
    let arrayNum2 = parseInt(arrayNum.join('')) + 1

    return arrayLe.join('') + arrayNum2

} */

/* 
foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100 */