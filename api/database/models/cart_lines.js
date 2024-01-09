const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_lines', {
    uuid_user: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'uuid_user'
      }
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id_product'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cart_lines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cart_lines_pkey",
        unique: true,
        fields: [
          { name: "uuid_user" },
          { name: "id_product" },
        ]
      },
    ]
  });
};
