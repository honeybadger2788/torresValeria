module.exports = function (sequelize, dataTypes) {

    const Gasto = sequelize.define("Gasto",{
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, notNull: true,
        },
        concepto:{ 
            type: dataTypes.STRING(45), notNull: true,
        },
        importe:{
            type: dataTypes.DECIMAL(12,2), notNull: true,
        },
        id_unidad:{
            type: dataTypes.INTEGER(11), foreingKey: true, notNull: true,
        },
        id_socio:{
            type: dataTypes.INTEGER(11), foreingKey: true, notNull: true,
        },
        comentario:{
            type: dataTypes.STRING(200)
        },
        fechaGasto:{
            type: dataTypes.DATE, notNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE, default: null,
        },
        saldado: {
            type: dataTypes.DATE, default: null,
        }
    },
    {
        tableName: 'Gastos',
        timestamps: true,
    });
    return Gasto;
}