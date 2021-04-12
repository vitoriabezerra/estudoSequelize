module.exports = (sequelize, Datatypes ) =>{

    const Usuario = sequelize.define(
        'Usuario',{
            nome: Datatypes.STRING,
            email: Datatypes.STRING,
            senha: Datatypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    return Usuario;
}


