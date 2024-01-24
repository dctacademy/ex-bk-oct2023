const usersCltr = { }

usersCltr.login = (req, res) => {
    const body = req.body 
    if(body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        res.json({
            notice: 'successfully logged in'
        })
    } else {
        res.status(401).json({
            notice: 'Invalid email / password'
        })
    }
}

module.exports = usersCltr 