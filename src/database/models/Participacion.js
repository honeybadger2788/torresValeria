module.exports = function (sequelize, dataTypes) {

    const Participacion = sequelize.define("Participacion",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true,
        },
        id_socio: {
            type: dataTypes.INTEGER(11), notNull: true, foreingKey: true
        },
        id_unidad: {
            type: dataTypes.INTEGER(11), notNull: true, foreingKey: true
        },
        porcentaje: {
            type: dataTypes.DECIMAL(4,2), notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Participaciones',
        timestamps: true,
    });
    return Participacion;
}