const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_states', {
    id_product_state: {
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
    tableName: 'product_states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_states_pkey",
        unique: true,
        fields: [
          { name: "id_product_state" },
        ]
      },
    ]
  });
};
