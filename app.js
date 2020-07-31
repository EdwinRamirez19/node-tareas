const argv = require("./config/yargs").argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/tareas')

const comando = argv._[0];


switch (comando) {
    case "crear":

        let response = crear(argv.descripcion);
        console.log(response)
        break;
    case "listar":
        let listado = getListado();

        console.log('LISTADO DE TAREAS PENDIETES\n'.green)
        for (let tarea of listado) {
            console.log('======================================='.green);
            console.log(`Descripcion : ${tarea.descripcion}`.blue);
            console.log(`Estado : ${tarea.completado}`.blue)
            console.log('======================================='.green);

        }

        break;

    case "actualizar":
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado === true) {
            console.log('Tarea Actualizada Con Exito')
        } else {
            console.log('Tarea no se pudo Actualizar')
        }
        break;
    case "borrar":
        let borrado = borrar(argv.descripcion);

        if (borrado === true) {
            console.log(borrado)
        } else {
            console.log('Tarea no se pudo Actualizar')
        }

        break;
    default:
        console.log("comando no reconocido");
        break;
}