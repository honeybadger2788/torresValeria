const bcript = require ('bcrypt');
const fs = require ('fs');

module.exports = {
    register: function (req,res){
        res.render('./admin/register');
    },
    crearCuenta: function (req,res){
        if (req.body.password == req.body.rePassword){
            let usuario = {
                usuario: req.body.user,
                password: bcript.hashSync(req.body.password, 12),
            }
            let usuarioJSON = JSON.stringify(usuario);
            fs.writeFileSync('usuarios.json',usuarioJSON);  
            return res.redirect('/');
        } else {
            res.send("No coinciden las contraseñas!");
        }
    }
}