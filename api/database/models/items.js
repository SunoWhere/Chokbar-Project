const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id_product'
      }
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'id_order'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "items_pkey",
        unique: true,
        fields: [
          { name: "id_product" },
          { name: "id_order" },
        ]
      },
    ]
  });
};
