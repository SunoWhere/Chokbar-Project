const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('providers_images', {
    id_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'providers',
        key: 'id_provider'
      }
    },
    id_image: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'images',
        key: 'id_image'
      }
    }
  }, {
    sequelize,
    tableName: 'providers_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "providers_images_pkey",
        unique: true,
        fields: [
          { name: "id_provider" },
          { name: "id_image" },
        ]
      },
    ]
  });
};
