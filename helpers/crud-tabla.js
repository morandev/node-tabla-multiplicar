const fs = require('fs');




const crearArchivo = async ( baseDeLaTabla = 0, indiceTope = 10 ) => {

    let salida = ``;

    //creamos el string con la tabla de multiplicar de la variable base hasta el 10
    for (let index = 0; index < indiceTope; index++) {
        salida += `***. { ${baseDeLaTabla}x${index+1} } = ${baseDeLaTabla*(index+1)}  \n`.bgGreen;
    }

    //escribimos un archivo de nombre tabla-del-${base}, le pasamos la tabla que esta en salida y handleamos un posible error
    //si el segundo parametro es un String, luego especificamos el metodo de codificacion o encoding
    
    try {
        let fileName = `tabla-del-${baseDeLaTabla}.txt`;

        fs.writeFileSync('out/'+fileName, salida, 'utf8', (err) => {
            if (err)
                throw err;
        });

        return fileName;
    } catch (error) {
        throw error;
    }

}

const leerArchivo = async ( fileName ) => {
    let data = '';

    try {
        //flag 'r': Open file for reading. An exception occurs if the file does not exist.
        data = fs.readFileSync('out/' + fileName, { encoding: 'utf8', flag: 'r' });
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
    leerArchivo
}