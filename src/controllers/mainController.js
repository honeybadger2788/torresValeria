const fs = require('fs');
const bcrypt = require ('bcrypt');
const path = require ('path');
const route = path.join (__dirname, '../usuarios.json');
let usuariosArray = JSON.parse(fs.readFileSync(route,{encoding:'utf-8'}));

module.exports = {
    main: function (req,res){
        res.render('./index');
    },
    login: function (req,res){
        for (let i = 0; i < usuariosArray.length; i++) {
            if(usuariosArray[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password,usuariosArray[i].password)){
                    usuarioLogueado = usuariosArray[i];
                    break;
                }
            } 
        }
        res.redirect('/user/index');
    },
}