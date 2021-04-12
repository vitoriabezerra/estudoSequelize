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

    Usuario.associate = (models) =>{
        //relação 1:N (usuario tem vários posts)
        Usuario.hasMany(models.Post, {as:"posts", foreignKey:"usuarios_id"});
    }

    return Usuario;
}


