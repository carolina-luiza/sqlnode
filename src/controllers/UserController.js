const User = require('../model/User')

module.exports = {
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },
    async store(req, res){
        const{ name, email } = req.boody;

        const user = await User.creat({name, email});

        return res.json(user);
    }
};
