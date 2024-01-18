const express = require('express')  // npm install express
const { checkSchema } = require('express-validator')
const cors = require('cors') // npm install cors
const app = express() 
const port = 3050

const configureDB = require('./config/db') 
const categoriesCltr = require('./app/controllers/categories-controller')
const expensesCltr = require('./app/controllers/expenses-controller')

const categoryValidationSchema = require('./app/validations/category-validation')
const expenseValidationSchema = require('./app/validations/expense-validation')
configureDB()

app.use(express.json()) // parse incoming json data 
app.use(cors())

app.get('/api/categories', categoriesCltr.list)
app.post('/api/categories', checkSchema(categoryValidationSchema), categoriesCltr.create)
app.put('/api/categories/:id',checkSchema(categoryValidationSchema), categoriesCltr.update)
app.delete('/api/categories/:id', categoriesCltr.destroy)


app.get('/api/expenses', expensesCltr.list)
app.post('/api/expenses', checkSchema(expenseValidationSchema), expensesCltr.create)
app.put('/api/expenses/:id', checkSchema(expenseValidationSchema), expensesCltr.update)
app.delete('/api/expenses/:id', expensesCltr.destroy)

app.listen(3050, () => {
    console.log('expense app is successfully running on port', port)
})