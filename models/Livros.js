module.exports = (sequelize, DataTypes) => {
  const Livros = sequelize.define(
    "Livros", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      estoque: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    }, {
      tableName: "livros",
      timestamps: false
    }
  );

  return Livros;
};