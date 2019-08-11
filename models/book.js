'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    bid: {
      allowNull: false,
      type: DataTypes.INTEGER
      
    },
    name:{
      allowNull: false,
      type : DataTypes.STRING
    },
    author:{
      allowNull: false,
      type : DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }

  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};