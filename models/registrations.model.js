const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Register = db.define(
  "register",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    employee: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[A-Z][0-9]{3}$/,
          msg: "Example: A123",
        },
      },
    },
    entranceTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "working",
      validate: {
        isIn: [["cancelled", "working", "out"]],
      },
    },
  },
  { timestamps: false }
);

module.exports = { Register };
