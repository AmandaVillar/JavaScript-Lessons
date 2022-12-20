
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

//exportando apenas uma função diretamente
// module.exports.gets = gets;

module.exports = {
    gets: gets,
    print: print
}