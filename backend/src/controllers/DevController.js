const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        //console.log(req.body.username);
        const { username } = req.body; // Desistruturação

        const uuserExists = await Dev.findOne({user: username});

        if(uuserExists){
            return res.json(uuserExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const {name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);

    }
};