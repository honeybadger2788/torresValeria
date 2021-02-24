module.exports = function (sequelize, dataTypes) {

    const Socio = sequelize.define("Socio",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true,
        },
        nombreSocio: {
            type: dataTypes.STRING(20), notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Socios',
        timestamps: true,
    });
    return Socio;
}