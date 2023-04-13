const { Model, DataTypes } = require('sequelize');

class Search extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        },
        {
            description: DataTypes.STRING,
        },
        {
            thumbnail: DataTypes.STRING
        },
        {
            price: DataTypes.STRING
        },
        {
            permalink: DataTypes.STRING
        },
        {
            sequelize
        })

    }
}

module.exports = Search;