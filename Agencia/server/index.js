const express = require('express');
const app = express();
const cors = require('cors'); //middleware
const morgan = require('morgan');
// SEGURIDAD
const fs = require('fs');
const https = require('https');

//base de datos en la nube
var mongoose = require('mongoose');
var URL = 'mongodb+srv://josuepm98:Hercules10@agencia.ffqgr.mongodb.net/AgenciaDB?retryWrites=true&w=majority';

//Base de datos local
//const { mongoose } = require('./database');

//configuracion del servernp
app.set('port', process.env.PORT || 3000);

//funciones middleware
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: 'https://192.168.100.42:4200'}));


//rutas
app.use('/api', require('./routes/private.route'));
app.use('/api/usuarios', require('./routes/usuarios.route'));


//conectando base de datos en la nube
mongoose.Promise = global.Promise;
mongoose.connect(URL, { useNewUrlParser: true })
    .then(()=>{
        console.log('DB is connected')
    })
    .catch(err => console.error(err));




/*launching server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});*/

/* SEGURIDAD */
https.createServer({
    key: fs.readFileSync('privateKey.key'),
    cert: fs.readFileSync('certificate.crt')
    },app).listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});