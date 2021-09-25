const { Transaction } = require('../../database/models');
const { Op } = require("sequelize");

const apiTransactionController = {
    list: async (req, res) => {
        let response = {
            count: null,
            products: [],
            balance: [
                {
                    incomes: null,
                    outcomes: null,
                }
            ],
            status: null,
        };
        let incomes = [];
        let outcomes = [];
        try {
            let trx = await Transaction.findAndCountAll();

            response.count = trx.rows.length;
            response.products = trx.rows.map(row => {
                row.revenue == 1 ? incomes.push(row.amount) : outcomes.push(row.amount)
                response.balance[0].incomes = incomes;
                response.balance[0].outcomes = outcomes;

                let transaction = {
                    id: row.id,
                    revenue: row.revenue,
                    concept: row.concept,
                    amount: row.amount,
                    date: row.date
                }

                return transaction;
            })
        }
        catch {
            response.status = 500;
        }
        return res.json(response);
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
        Transaction.findAll({
            where: {
                concept: { [Op.like]: '%' + req.query.keyword + '%' }
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