const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id_product: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stands',
        key: 'id_stand'
      }
    },
    id_product_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product_types',
        key: 'id_product_type'
      }
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name_en: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name_fr: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id_product" },
        ]
      },
    ]
  });
};
