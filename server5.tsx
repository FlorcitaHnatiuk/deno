import { yellow, green, red, bgWhite, bgYellow, bgRed, white } from "https://deno.land/std@0.100.0/fmt/colors.ts";

const getMin = (numbers: number[]) => Math.min(...numbers)
const getMax = (numbers: number[]) => Math.max(...numbers)
const getAvg = (numbers: number[]) => {
    const reducer = (accumulator: number, curr: number) => accumulator + curr;
    return numbers.reduce(reducer) / numbers.length;
}

const numbers = Deno.args.map(num => parseInt(num, 10))

const min = getMin((numbers));
const max = getMax(numbers);
const avg = getAvg(numbers);

const numbersStr = `
    Numeros: ${numbers},
    Minimo: ${min},
    Maximo: ${max},
    Promedio: ${avg}
`;

Deno.writeTextFile(`numbers.txt`, numbersStr);

console.log(bgWhite(`Numeros: ${numbers}`))
console.log(bgWhite(yellow(`Minimo: ${min}`)))
console.log(bgWhite(red(`Maximo: ${max}`)))
console.log(bgWhite(green(`Promedio: ${avg}`)))

//Pasar por consola los parametros