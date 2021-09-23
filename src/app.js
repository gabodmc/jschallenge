const express = require('express');
const methodOverride = require ('method-override')
const cors = require('cors')

const app = express();
const path = require('path');
const port = process.env.PORT;

const apiTransactionRouter = require('./routes/api/apiTransactionRouter');

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.use('/', apiTransactionRouter);
app.use('/api/movements', apiTransactionRouter);
app.use ((req, res, next) => {
    res.status(404).render('404')
});
app.listen (port || 3001, () => {
    console.log('Servidor levantado en el puerto 3001');
});