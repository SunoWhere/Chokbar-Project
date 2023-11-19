const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guests_images', {
    id_guest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'guests',
        key: 'id_guest'
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
    tableName: 'guests_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guests_images_pkey",
        unique: true,
        fields: [
          { name: "id_guest" },
          { name: "image" },
        ]
      },
    ]
  });
};
