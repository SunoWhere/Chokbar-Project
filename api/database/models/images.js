const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    image: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
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
          { name: "image" },
        ]
      },
    ]
  });
};
