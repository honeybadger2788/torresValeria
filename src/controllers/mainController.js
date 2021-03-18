const bcrypt = require ('bcrypt');
const { validationResult } = require('express-validator');
const db = require ('../database/models/index');

module.exports = {
    main: function (req,res){
        let errors = validationResult(req);
        res.render('./index',{
            errors
        });
    },
    login: function (req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.Usuario.findOne({
                where: {
                    usuario: req.body.user
                }
            })
            .then(function(usuarioBuscado){
                if(usuarioBuscado == null ){
                    errors.errors.push({msg: 'Usuario no encontrado'})
                    return res.render('./index', {
                        errors: errors.errors
                    });
                } else {
                    if(bcrypt.compareSync(req.body.password,usuarioBuscado.password)){
                        req.session.usuarioLogueado = usuarioBuscado;
                        return res.redirect('/user/index');
                    } else {
                        errors.errors.push({msg: 'Contraseña incorrecta'})
                    return res.render('./index', {
                        errors: errors.errors
                    });
                    }
                }
            })
            .catch((e)=>res.json(e));        
        } else {
            return res.render('./index', {
                errors:  errors.errors
            })
        }
    },
}