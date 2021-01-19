const express = require('express');
const app = express();
const cors = require('cors'); //middleware
const morgan = require('morgan');

const stripe = require('stripe')('sk_test_51IBJYMDIW5cOTGjayBhmNQY0WhGVtIefiwK1p5w2DZXxBVKkJr8j7SrtKuu58pgDUKbtgGCFVxWjoOipgyeAHXY200El1JZ8LK');

// SEGURIDAD
const fs = require('fs');
const https = require('https');

//base de datos en la nube
var mongoose = require('mongoose');
var URL = 'mongodb+srv://josuepm98:Hercules10@agencia.ffqgr.mongodb.net/AgenciaDB?retryWrites=true&w=majority';

//Base de datos local
//const { mongoose } = require('./database');

//configuracion del server
app.set('port', process.env.PORT || 3400);

//funciones middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'https://192.168.100.42:4600'}));

/*
//rutas
app.use('/api', require('./routes/private.route'));
app.use('/api/usuarios', require('./routes/usuarios.route'));*/

//ruta stripe
app.post('/stripe_checkout', async(req, res) =>{
    //recojo token y cantidad
    const stripeToken = req.body.stripeToken;
    const cantidad = req.body.cantidad;
    //la paso a euros ya que stripe va a dolares
    const cantidadEuros = Math.round(cantidad * 100);
    //creo la transacción
    const chargeObject = await stripe.charges.create({
        amount: cantidadEuros,
        currency: 'eur',
        source: stripeToken,
        capture: false,
        description: 'Compra vuelo',
        receipt_email: 'jpm99@alu.ua.es'
    });
    try{
        await stripe.charges.capture(chargeObject.id);
    }catch(error){
        await stripe.refunds.create({charge: chargeObject.id });
    }
});

app.use('/api/bancos', require('./routes/banco.route'));

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