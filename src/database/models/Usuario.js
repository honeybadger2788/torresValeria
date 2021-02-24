module.exports = function (sequelize, dataTypes) {

    const Usuario = sequelize.define("Usuario",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true
        },
        usuario: {
            type: dataTypes.STRING(45), notNull: true,
        },
        password: {
            type: dataTypes.STRING(200), notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Usuarios',
        timestamps: true,
    });
    return Usuario;
}