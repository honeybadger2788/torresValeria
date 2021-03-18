const db = require ('../database/models/index');
const { validationResult } = require('express-validator');

module.exports = {
    index: function (req,res){
        res.render('./users/menu');
    },
    gastos: function (req,res){
        let errors = validationResult(req);
        res.render('./users/gastos',{
            errors
        });
    },
    estadias: function (req,res){
        let errors = validationResult(req);
        res.render('./users/estadias',{
            errors
        });
    },
    cargarGasto: function (req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.Gasto.create({
                ...req.body
            })
            .then(function(){
                res.redirect('/user/gastos')
            })
            .catch((e)=>res.json(e))
        } else {
            return res.render('./users/gastos', {
                errors:  errors.errors
            })
        }
    },
    cargarEstadia: function (req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.Estadia.create({
                ...req.body
            })
            .then(function(){
                res.redirect('/user/estadias')
            })
            .catch((e)=>res.json(e))
        } else {
            return res.render('./users/estadias', {
                errors:  errors.errors
            })
        }
    },
    informe: function (req,res){
        db.Gasto.findAll()
        db.Estadia.findAll()
        .then((informe)=>{
            return res.json(informe)
            res.render('./users/informe',{
                informe
            });
        })
        .catch((e)=>res.json(e))
    },
    profile: function (req,res){
        res.render('./users/profile');
    },
    editPassword: function (req,res){
        res.render('./users/profile');
    },
}