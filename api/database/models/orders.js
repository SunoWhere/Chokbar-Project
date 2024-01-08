const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id_order: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hash: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "orders_hash_key"
    },
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stands',
        key: 'id_stand'
      }
    },
    uuid_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'uuid_user'
      }
    },
    id_order_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order_states',
        key: 'id_order_state'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_hash_key",
        unique: true,
        fields: [
          { name: "hash" },
        ]
      },
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id_order" },
        ]
      },
    ]
  });
};
