const encoder = new TextEncoder();
const data = encoder.encode('Hello Flor')
await Deno.writeFile('test.txt', data);