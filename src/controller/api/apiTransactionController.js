const { Transaction } = require('../../database/models');

const apiTransactionController = {

    list: (req, res) => {
        Transaction.findAll({
            include: ['income', 'concept']
        })
            .then(transactions => {
                return res.status(200).json({
                    total: transactions.length,
                    data: transactions,
                    status: 200
                })
            })
    },

    show: (req, res) => {
        Transaction.findByPk((req.params.id), {
            include: ['income', 'concept'],
        }
        )
            .then(transactions => {
                return res.status(200).json({
                    data: transactions,
                    status: 200
                })
            })
    },

    create: (req, res) => {
        Transaction.create((req.body), {
            include: ['income', 'concept'],
        })
            .then(transactions => {
                return res.status(200).json({
                    data: transactions,
                    status: 200,
                    created: "ok"
            })
        })
    },

    delete: (req, res) => {
        Transaction.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                return res.json(response)
            })
    },

    search: (req, res) => {
        Transaction
            .findAll({
                where: {
                    concept: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            })
            .then(transactions => {
                if (transactions.length > 0) {
                    return res.status(200).json(transactions);
                }
                return res.status(200).json("No hay resultados para ese concepto")

            })
    },
}

module.exports = apiTransactionController;