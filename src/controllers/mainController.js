const fs = require('fs');
const bcrypt = require ('bcrypt');
const path = require ('path');
const db = require ('../database/models/index');

module.exports = {
    main: function (req,res){
        res.render('./index');
    },
    login: function (req,res){
        let usuarioLogueado;
        let usuarioBuscado = db.Usuario.findOne({
            where: {
                usuario: req.body.user
            }
        })
        if(usuarioBuscado === null ){
            console.log('Not found!');
        } else {
            if(bcrypt.compareSync(req.body.password,usuarioBuscado.password)){
                usuarioLogueado = usuariosArray[i];
                console.log(usuarioLogueado);
                return res.redirect('/user/index');
            } else {
                console.log('Password doesnt match!');
                return res.redirect('/');
            }
        }
        
    },
}