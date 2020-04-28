const User = require('../model/User')

module.exports = {
    async store(req, res){
        const{ name, email } = req.boody;

        const user = await User.creat({name, email});

        return res.json(user);
    }
};