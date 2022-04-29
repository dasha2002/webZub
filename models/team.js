'use strict';
const {
  Model
} = require('sequelize');
const Module = require("module");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Player,
          {foreignKey:"TeamId",as: "Player"})
    }
  }
  Team.init({
    TeamId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Abbr: DataTypes.STRING,
    Logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};