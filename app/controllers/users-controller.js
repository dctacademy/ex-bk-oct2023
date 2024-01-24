const jwt = require('jsonwebtoken') // npm install jsonwebtoken
const usersCltr = { }

usersCltr.login = (req, res) => {
    const body = req.body 
    if(body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        const tokenData = { id: process.env.ID  }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '14d'} )
        res.json({ token: token })
        // generate a jwt(json web token) token and send the token to the front end
    } else {
        res.status(401).json({
            notice: 'Invalid email / password'
        })
    }
}

module.exports = usersCltr 