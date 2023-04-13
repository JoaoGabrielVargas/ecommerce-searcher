const { Model, DataTypes } = require('sequelize');

class Search extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            thumbnail: DataTypes.STRING,
            price: DataTypes.STRING,
            permalink: DataTypes.STRING,
            id: {type: DataTypes.STRING, primaryKey: true, unique: false}
        },
        {
            sequelize
        })

    }
}

module.exports = Search;