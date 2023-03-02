import { serve } from 'https://deno.land/std@0.137.0/http/server.ts';

const revertirFrase = (frase: any) => {
    return frase.split(" ").reverse().join(" ");
}

serve(req => {
    console.log(req)
    const url = new URL(req.url)
    const frase = url.searchParams.get('frase') ? url.searchParams.get('frase') : '';
    const fraseInversa = revertirFrase(frase)
    return new Response(fraseInversa)
}, { port:3005});
