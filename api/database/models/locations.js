const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    id_location_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location_sizes',
        key: 'id_location_size'
      }
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "locations_pkey",
        unique: true,
        fields: [
          { name: "id_location" },
        ]
      },
    ]
  });
};
