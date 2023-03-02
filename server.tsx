import { parse } from "https://deno.land/std@0.178.0/datetime/mod.ts";
const myDate = parse("24-08-1992", "dd-mm-yyyy");
console.log(myDate);