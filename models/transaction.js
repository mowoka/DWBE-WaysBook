"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        as: "Users",
        foreignKey: "userId",
      });
      Transaction.hasMany(models.PurchaseBook, {
        as: "purchasebook",
        foreignKey: "transactionId",
      });
    }
  }
  Transaction.init(
    {
      userId: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      totalPayment: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
