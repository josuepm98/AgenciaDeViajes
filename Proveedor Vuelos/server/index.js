const express = require('express');
const app = express();
const cors = require('cors'); //middleware
const morgan = require('morgan');
// SEGURIDAD
//const https = require('https');

//base de datos en la nube
var mongoose = require('mongoose');
var URL = 'mongodb+srv://josuepm98:Hercules10@agencia.ffqgr.mongodb.net/AgenciaDB?retryWrites=true&w=majority';

//Base de datos local
//const { mongoose } = require('./database');

//configuracion del server
app.set('port', process.env.PORT || 3100);

//funciones middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://192.168.100.42:4300'}));

/*
//rutas
app.use('/api', require('./routes/private.route'));
app.use('/api/usuarios', require('./routes/usuarios.route'));*/

app.use('/api/vuelos', require('./routes/vuelo.route'));

/* SEGURIDAD
const options = {
    key: fs.readFileSync('ruta_key/key.pem'),
    cert: fs.readFileSync('ruta_cert/cert.cert')
};*/

//conectando base de datos en la nube
mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true })
    .then(()=>{
        console.log('DB is connected')
    })
    .catch(err => console.error(err));



/*launching server*/

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

/* SEGURIDAD 
https.createServer(app).listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});*/