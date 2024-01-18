const Expense = require('../models/expense-model')
const { validationResult} = require('express-validator')
const expensesCltr = {}

expensesCltr.list = (req, res) => {
    Expense.find()
        .then((expenses) => {
            res.json(expenses)
        })
        .catch((err) => {
            res.json(err) 
        })
}

expensesCltr.create = (req, res) => {
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body 
    const exp = new Expense(body)
    exp.save()
        .then((expObj) => {
            res.json(expObj)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesCltr.update = (req, res) => {
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id 
    const body = req.body 
    Expense.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((exp) => {
            res.json(exp)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesCltr.destroy = (req, res) => {
    const id = req.params.id 
    Expense.findByIdAndDelete(id) 
        .then((exp) => {
            res.json(exp)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = expensesCltr 