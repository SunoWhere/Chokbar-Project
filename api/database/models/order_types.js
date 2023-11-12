const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_types', {
    id_order_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_types_pkey",
        unique: true,
        fields: [
          { name: "id_order_type" },
        ]
      },
    ]
  });
};
