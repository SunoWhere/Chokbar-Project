const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stands_images', {
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stands',
        key: 'id_stand'
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
    tableName: 'stands_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stands_images_pkey",
        unique: true,
        fields: [
          { name: "id_stand" },
          { name: "image" },
        ]
      },
    ]
  });
};
