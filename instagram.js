const {Usuario, Comentario, Post, sequelize} = require('./models');
const { Op } = require('sequelize');

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});


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


// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.destroy({
//     where: {
//         id: 9
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


