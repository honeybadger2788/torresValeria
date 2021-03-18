const bcript = require ('bcrypt');
const { validationResult } = require('express-validator');
const db = require ('../database/models/index');

module.exports = {
    register: function (req,res){
        let errors = validationResult(req);
        res.render('./admin/register',{
            errors
        });
    },
    crearCuenta: function (req,res){
        let errors = validationResult(req);
        if (errors.isEmpty() && req.body.password == req.body.rePassword){
            db.Usuario.findOrCreate({
                    where: {
                        usuario: req.body.user,
                    },
                    defaults: {
                        password: bcript.hashSync(req.body.password, 12),
                    }
                })
                .then (function(resultado){
                    if(!resultado[1]){
                        errors.errors.push({msg: "Usuario ya registrado"})
                        return res.render('./admin/register', {
                            errors: errors.errors
                        })
                    } else {
                        return res.redirect('/')
                    }
                })
                .catch((e)=>res.json(e))
        } else {
            errors.errors.push({msg: "Las contraseñas no coinciden"})
            return res.render('./admin/register', {
                errors:  errors.errors
            })
        }
        
    }
}

