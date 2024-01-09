const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id_image: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "images_pkey",
        unique: true,
        fields: [
          { name: "id_image" },
        ]
      },
    ]
  });
};
