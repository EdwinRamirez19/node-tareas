const descripcion = {
    descripcion: {
        demand: true,
        alias: "d",
    },

};
const completado = {

    completado: {
        default: true,
        alias: 'c'
    }

};

const argv = require("yargs")
    .command("crear", "Crear una tarea por hacer", { descripcion })
    .command("actualizar", "Actualizar una tarea por hacer", { descripcion, completado })
    .command("borrar", "Borrar una Tarea por hacer", { descripcion })
    .help().argv;
module.exports = {
    argv
}