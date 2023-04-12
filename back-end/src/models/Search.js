const { Model, DataTypes } = require('sequelize');

class Search extends Model {
    static init(sequelize) {
        super.init({
            search: DataTypes.STRING,
        },{
            sequelize
        })

    }
}

module.exports = Search;