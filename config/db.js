const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/expense-app-oct2023')
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
            console.log('error connecting to db')
        })
}

module.exports = configureDB

// export default configureDB 