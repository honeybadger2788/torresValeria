const bcript = require ('bcrypt');
const db = require ('../database/models/index');

module.exports = {
    register: function (req,res){
        res.render('./admin/register',{
            errors: undefined,
        });
    },
    crearCuenta: function (req,res){
        if (req.body.password == req.body.rePassword){
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
                            {msg: "Usuario ya existente"},
                        ]
                    })
                } else {
                    return res.redirect('/')
                }
            });
        } else {
            return res.render('./admin/register', {
                errors:  [
                    {msg: "Las contraseñas no coinciden"},
                ]
            })
        }
    }
}