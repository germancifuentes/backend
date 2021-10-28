import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//BASE DE DATOS
const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017/prueba';
const url = 'mongodb+srv://cristianf:d1I99E05uqqlKRdG@cluster0.6wzee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url, options).then(
    () => { 
        console.log('Conectada a Base de Datos')
     },
    err => { err }
  );

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));



//RUTA
app.use('/api', require('./routes/producto'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
 console.log('El servidor se escucha por el puerto '+ app.get('puerto'));
});
