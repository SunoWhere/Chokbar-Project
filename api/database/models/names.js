const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('names', {
    id_name: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    language_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'languages',
        key: 'language_name'
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id_product'
      }
    }
  }, {
    sequelize,
    tableName: 'names',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "names_pkey",
        unique: true,
        fields: [
          { name: "id_name" },
        ]
      },
    ]
  });
};
