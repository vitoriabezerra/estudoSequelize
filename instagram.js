const {Usuario, Comentario, Post, sequelize} = require('./models');
const { Op } = require('sequelize');

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });


// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll({
//     where: {
//         texto:{[Op.like]: 'oi%'}
//     }
// })
// .then((resultado) =>{
//     console.log(resultado.map(user => user.toJSON()));
// })

// Usuario.findAll({
//     order: [
//         ['id', 'ASC'] //orderna pelo id  crescente
//         //['nome', 'DESC'] orderna por decrescente;
//     ],
//     limit : 2, //limita em dois resultados
//     offset: 2
// })
// .then((resultado) =>{
//     console.log(resultado.map(user => user.toJSON()));
// })


// Usuario.findAll({ //todos os usuarios com letra a no nome
//     where: {
//          nome:{[Op.like]: '%A%'}
//         }
//     })
//     .then((resultado) =>{
//         console.log(resultado.map(user => user.toJSON()));
//     })


// Usuario.findAll({ //todos os usuarios com letra a no nome
//      where: {
//              nome:{[Op.notLike]: '%a'}
//             }
//     })
//     .then((resultado) =>{
//             console.log(resultado.map(user => user.toJSON()));
//      })

Comentario.findAll({
    order: [
        ['id', 'ASC'] //orderna pelo id  crescente
    ],
    limit : 2, //limita em dois resultados
    //offset: 2
})
.then((resultado) =>{
    console.log(resultado.map(user => user.toJSON()));
})