const { Transaction } = require('../../database/models');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');

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
                    revenue_types: { "1": "income", "2": "outcome" },
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
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                Transaction.create(req.body)
                    .then(transactions => {
                        return res.status(200).json({
                            data: transactions,
                            created: "ok"
                        })
                    })
            } catch (error) {
                res.json(error);
            }} else {
            res.status(400).json({ errors: errors.mapped() })
        }
    },

    update: (req, res) => {
        let updatedTransaction = req.body
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                Transaction.update(updatedTransaction,
                    {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then((result) => res.status(200).json(result))
            } catch (error) {
                res.json(error);
            }} else {
            res.status(400).json({ errors: errors.mapped() })
        }
    },

    delete: (req, res) => {
        Transaction.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                return res.status(200).json(response)
            })
    },

    search: (req, res) => {
        const query = req.query;
        const conceptKeyword = query.concept ? query.concept : '';
        Transaction.findAll({
            where: { concept: { [Op.substring]: conceptKeyword } }
        })
            .then(transactions => {
                if (transactions.length > 0) {
                    return res.status(200).json(transactions);
                }
                return res.status(204).json("No hay registros con ese concepto")

            })
    },
}

module.exports = apiTransactionController;