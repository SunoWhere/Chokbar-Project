const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_states', {
    id_order_state: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_states_pkey",
        unique: true,
        fields: [
          { name: "id_order_state" },
        ]
      },
    ]
  });
};
