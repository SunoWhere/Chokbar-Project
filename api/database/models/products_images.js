const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_images', {
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id_product'
      }
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'images',
        key: 'image'
      }
    }
  }, {
    sequelize,
    tableName: 'products_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_images_pkey",
        unique: true,
        fields: [
          { name: "id_product" },
          { name: "image" },
        ]
      },
    ]
  });
};
