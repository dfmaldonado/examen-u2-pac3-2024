console.log('Contador');

let cont = 0;

const disminuir = document.querySelector ('.disminuir');
const aumentar = document.querySelector ('.aumentar');
// const contador = document.querySelector ('.contador');

aumentar.addEventListener ('click', () => {
    cont++;
    console.log(`Contador ${cont}`);
})

disminuir.addEventListener ('click', () => {
    cont--;
    console.log(`Contador ${cont}`);
})
