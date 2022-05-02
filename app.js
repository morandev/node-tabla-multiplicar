const colors = require('colors');
const argv = require('./config/yargs')
const { crearArchivo, leerArchivo } = require('./helpers/crud-tabla');

//clear the console to the user
process.stdout.write("\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W");


// buscamos argumentos de lineas de comandos
// const [,, base = 'base=5'] = process.argv;
// console.log(process.argv);
// const [, baseNumerica ] = base.split('=');


// crearArchivo( baseNumerica ? baseNumerica : base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err) );


if (argv.b) {
    crearArchivo(argv.b, argv.t)
        .then( nombreArchivo => {
            if(argv.l)
                return leerArchivo(nombreArchivo);
            
            console.log(colors.brightMagenta(`\nFile Succesfully Created: /`).bgGreen + colors.yellow(nombreArchivo).bgGreen);
        })
        .then( tablaString => {
            if (tablaString)
                console.log('\n' + colors.black('Table List activated...\n').bgWhite+ tablaString);
        })
        .catch( error => console.log(colors.black(error).bgRed));
}

//footer information 
setTimeout(() => {
    console.log(colors.gray('\n Author:   Facundo Moran.'.bgYellow));
    console.log(colors.gray(' Github:   https://github.com/morandev'.bgYellow));
    console.log(colors.gray(' Linkedin: https://www.linkedin.com/in/facumoransi'.bgYellow));
}, 250)

