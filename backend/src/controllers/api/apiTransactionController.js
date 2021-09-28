const { Transaction } = require('../../database/models');
const { Op } = require("sequelize");

const apiTransactionController = {
    list: (req, res) => {
        Transaction.findAll(
            {
                attributes: ['id', 'concept', 'amount', 'date', 'revenue'],
            }

        )
            .then(movements => {
                return res.status(200).json({
                    total: movements.length,
                    transactions: movements,
                    status: 200
                })
            })
    },

    show: async (req, res) => {
        let response = {
            transaction: [],
            status: null,

        };
        try {
            let trx = await Transaction.findByPk(req.params.id);
            let destTransaction = {
                id: trx.id,
                amount: trx.amount,
                date: trx.date,
                revenue: trx.revenue,
                concept: trx.concept
            }
            response.transaction.push(destTransaction);
            response.status = 200;
        }
        catch {
            response.status = 500;
        }
        return res.json(response);
    },

    create: (req, res) => {
        Transaction.create(req.body)
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
        Transaction.findAll({
            where: {
                id: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
            .then(transactions => {
                if (transactions.length > 0) {
                    return res.status(200).json(transactions);
                }
                return res.status(200).json("No hay registros con ese concepto")

            })
    },
}

module.exports = apiTransactionController;