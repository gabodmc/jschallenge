const express = require('express');
const cors = require('cors')

const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

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
app.listen (port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});