const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualizar tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como pendiente o completado la tarea'
        }
    })
    .command('listar', 'Listar todas las tareas', {

    })
    .command('borrar', 'Borrar tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por borrar'
        }
    })
    .help().argv;

module.exports = {
    argv
}