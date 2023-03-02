import { yellow, green, red, bgWhite, bgYellow, bgRed, white } from "https://deno.land/std@0.100.0/fmt/colors.ts";

console.log(bgRed(white('Flor')))
console.log(bgYellow(green('Flor')))
console.log(bgWhite(red('Flor')))
console.log(bgRed(yellow('Hola')))