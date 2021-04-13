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

 //exemplo1
// Usuario.findByPk(1,{
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })


// Usuario.findByPk(1, {include: ['posts']}).then(
//     usuario =>{
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

// Post.findByPk(1, {include: ['comentarios']}).then(
//     comentario =>{
//         console.log(comentario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include: ['curtiu']}).then(
    post =>{
        console.log(post.toJSON());
        sequelize.close();
    }
)