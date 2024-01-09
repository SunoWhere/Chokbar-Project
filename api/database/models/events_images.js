const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_images', {
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'events',
        key: 'id_event'
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
    tableName: 'events_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "events_images_pkey",
        unique: true,
        fields: [
          { name: "id_event" },
          { name: "id_image" },
        ]
      },
    ]
  });
};
