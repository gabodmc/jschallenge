const {Movement} = require('../database/models');

const homeController = {
    show: (req,res ) => {
        res.render('home');
    },
}
module.exports = homeController;