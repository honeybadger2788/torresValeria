const express = require ("express");
const app = express();
const path = require('path');
const session = require('express-session');
const userMiddleware = require("./middlewares/userMiddleware");
const mainRouter = require('./routes/mainRoutes');
const usersRouter = require('./routes/usersRoutes');
const adminRouter = require('./routes/adminRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret:"esto es una frase ultra secreta",resave: true,saveUninitialized: true}));

app.use(userMiddleware);

app.use('/', mainRouter);

app.use('/user', usersRouter);

app.use('/admin',adminRouter);

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})