// process.env
require('dotenv').config() // npm install dotenv
const express = require('express')  // npm install express
const { checkSchema } = require('express-validator')
const cors = require('cors') // npm install cors
const app = express() 
const port = 3050

const configureDB = require('./config/db') 
const categoriesCltr = require('./app/controllers/categories-controller')
const expensesCltr = require('./app/controllers/expenses-controller')
const usersCltr = require('./app/controllers/users-controller')

const authenticateUser = require('./app/middlewares/auth')

const categoryValidationSchema = require('./app/validations/category-validation')
const expenseValidationSchema = require('./app/validations/expense-validation')
configureDB()

app.use(express.json()) // parse incoming json data 
app.use(cors())

// routing level middleware function - authenticateuUser
app.get('/api/categories', authenticateUser, categoriesCltr.list)
app.post('/api/categories',authenticateUser, checkSchema(categoryValidationSchema), categoriesCltr.create)
app.put('/api/categories/:id',authenticateUser,checkSchema(categoryValidationSchema), categoriesCltr.update)
app.delete('/api/categories/:id', authenticateUser, categoriesCltr.destroy)


app.get('/api/expenses',authenticateUser, expensesCltr.list)
app.post('/api/expenses', authenticateUser, checkSchema(expenseValidationSchema), expensesCltr.create)
app.put('/api/expenses/:id', authenticateUser, checkSchema(expenseValidationSchema), expensesCltr.update)
app.delete('/api/expenses/:id',authenticateUser, expensesCltr.destroy)

app.post('/api/users/login', usersCltr.login)

app.listen(3050, () => {
    console.log('expense app is successfully running on port', port)
})