const argv = require('yargs')
    .option('b', { 
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base numerica que representara la correspondiente tabla. Maximo 50.000.000.'.brightYellow
    })
    .option('l', { 
        alias: 'list',
        boolean: true,
        default: false,
        describe: 'Listar/Imprimir la tabla de la correspondiente base.'.brightYellow
    })
    .option('t', {
        alias: 'top',
        type: 'number',
        describe: 'Setear el limite de la tabla correspondiente. Maximo 100.'.brightYellow
    })
    .check( (argv, options) => {
        if ( !Number(argv.b) || ( argv.t && !Number(argv.t))) 
            throw 'Debera ingresar un valor numerico para el flag correspondiente'.brightRed

        if(Math.abs(argv.b) > 50000000 || Math.abs(argv.t) > 100)
            throw 'Debera ingresar un valor numerico menor'.brightRed
        //true para avisar que todo check paso sin problems
        return true;
    })
    .argv;


module.exports = argv;
