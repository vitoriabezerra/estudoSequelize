module.exports = (sequelize, Datatypes ) =>{
 
    const Comentario = sequelize.define(
        'Comentario',{
            texto: Datatypes.STRING,
            usuarios_id: Datatypes.INTEGER,
            posts_id: Datatypes.INTEGER
        }, {
            tableName: "comentarios",
            timestamps: false
        }
    );

    return Comentario;
}