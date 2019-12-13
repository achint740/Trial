const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/User.db'
});

const User = db.define('User',{
    name : {
        type : Sequelize.STRING(100)
    },
    password : {
        type : Sequelize.STRING(10)
    }
});

module.exports = {
    db,User
};