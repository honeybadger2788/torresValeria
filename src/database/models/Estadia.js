module.exports = function (sequelize, dataTypes) {

    const Estadia = sequelize.define("Estadia",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true,
        },
        nombre:{ 
            type: dataTypes.STRING(45), notNull: true,
        },
        fechaIngreso:{
            type: dataTypes.DATE, notNull: true,
        },
        fechaEgreso:{
            type: dataTypes.DATE, notNull: true,
        },
        importeTotal:{
            type: dataTypes.DECIMAL(12,2), notNull: true,
        },
        importeDeposito:{
            type: dataTypes.DECIMAL(12,2), notNull: true,
        },
        id_unidad:{
            type: dataTypes.INTEGER(11), foreingKey: true, notNull: true,
        },
        id_socio:{
            type: dataTypes.INTEGER(11), foreingKey: true, notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        },
        saldado: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Estadias',
        timestamps: true,
    });
    return Estadia;
}