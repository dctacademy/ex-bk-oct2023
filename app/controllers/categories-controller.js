const Category = require('../models/category-model')
const { validationResult } = require('express-validator')
const categoriesCltr = {}

categoriesCltr.list = (req, res) => {
    Category.find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.create = (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const body = req.body  // const { body } = req 
    const c1 = new Category() 
    c1.name = body.name
    c1.save()
        .then((cat) => {
            res.json(cat)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.update = (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id 
    const body = req.body 
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true  })
        .then((cat) => {
            res.json(cat)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.destroy = (req, res) => {
    const id = req.params.id 
    Category.findByIdAndDelete(id)
        .then((cat) => {
            if(cat) {
                res.json(cat) 
            } else {
                res.status(404).json({ error: 'record not found'})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = categoriesCltr


