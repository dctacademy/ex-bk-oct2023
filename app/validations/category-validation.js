const categoryValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: 'Category is required'
        }
    }
}

module.exports = categoryValidationSchema