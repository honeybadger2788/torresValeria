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
            db.Usuario.create({
                usuario: req.body.user,
                password: bcript.hashSync(req.body.password, 12),
            })
            .then (function(resultado){
                console.log(resultado);
                return res.redirect('/');
            })
        } else {
            res.render('./admin/register', {
                errors: [
                    {msg: 'Las contraseñas no coinciden'}
                ]
            });
        }
    }
}