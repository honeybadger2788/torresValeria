module.exports = function (sequelize, dataTypes) {

    const Unidad = sequelize.define("Unidad",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true,
        },
        nombreUnidad: {
            type: dataTypes.STRING(45), notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Unidades',
        timestamps: true,
    });
    return Unidad;
}