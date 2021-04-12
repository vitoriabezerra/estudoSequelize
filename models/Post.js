module.exports = (sequelize, Datatypes ) =>{

    const Post = sequelize.define(
        'Post',{
            texto: Datatypes.INTEGER(100),
            img: Datatypes.STRING(100),
            usuarios_id: Datatypes.INTEGER,
            n_likes: Datatypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    return Post;
}
