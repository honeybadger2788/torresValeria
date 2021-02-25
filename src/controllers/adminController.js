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
        if (errors.isEmpty()){
            db.Usuario.findOrCreate({
                    where: {
                        usuario: req.body.user,
                    },
                    defaults: {
                        password: bcript.hashSync(req.body.password, 12),
                    }
                })
                .then (function(resultado){
                    if(resultado){
                        return res.render('./admin/register', {
                            errors: [ 
                                {
                                errors:
                                    {msg: "Usuario ya existente"},
                                }
                            ]
                        })
                    } else {
                        return res.redirect('/')
                    }
                });
        } else {
            return res.render('./admin/register', {
                errors:  errors.errors
            })
        }
        
    }
}

