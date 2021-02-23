module.exports = {
    index: function (req,res){
        res.render('./users/menu');
    },
    gastos: function (req,res){
        res.render('./users/gastos');
    },
    estadias: function (req,res){
        res.render('./users/estadias');
    },
    cargarGasto: function (req,res){
        res.send(req.body);
    },
    cargarEstadia: function (req,res){
        res.send(req.body);
    },
    informe: function (req,res){
        res.render('./users/informe');
    },
}