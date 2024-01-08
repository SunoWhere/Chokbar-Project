const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipments_images', {
    id_equipment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'equipments',
        key: 'id_equipment'
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
    tableName: 'equipments_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "equipments_images_pkey",
        unique: true,
        fields: [
          { name: "id_equipment" },
          { name: "id_image" },
        ]
      },
    ]
  });
};
