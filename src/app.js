// ************ Requires's ************//
const express = require ('express');
const path = require ('path');
const methodOverride = require ('method-override');

// ************ express() - dont' touch ************** //
const app = express();

// ************** Middlewares - don't touch ******************/
app.use(express.static(path.join(__dirname,'../public'))); //se define la carpeta de archivos publicos
app.use(express.urlencoded({extended:false})); //linea para que lo que viene en los formularios sea capturado sin problemas
app.use(express.json()); //linea para que lo que viene en los formularios sea capturado sin problemas 
app.use(methodOverride('_method'));//Para poder sobreecribir el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - don't touch ************* //
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views')); //se define ubicacion de la carpeta de las vistas


// ************ Route System require and use() ************* //
const mainRouter = require ('./routes/main.js')
app.use('/',mainRouter);


// ************ exports app - dont'touch ************ //
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
});