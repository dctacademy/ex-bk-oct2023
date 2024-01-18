const expenseValidationSchema = {
    expenseDate: {
        notEmpty: {
            errorMessage: 'expense date is required'
        }
    },
    amount: {
        notEmpty: {
            errorMessage: 'amount is required'
        }
    },
    description: {
        notEmpty: {
            errorMessage: 'description is required'
        }
    },
    categoryId: {
        notEmpty: {
            errorMessage: 'categoryId is required'
        }
    }
}

module.exports = expenseValidationSchema