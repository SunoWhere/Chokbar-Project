const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_types', {
    id_product_type: {
      autoIncrement: true,
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
    tableName: 'product_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_types_pkey",
        unique: true,
        fields: [
          { name: "id_product_type" },
        ]
      },
    ]
  });
};
