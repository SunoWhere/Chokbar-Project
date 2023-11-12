const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location_sizes', {
    id_location_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location_sizes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "location_sizes_pkey",
        unique: true,
        fields: [
          { name: "id_location_size" },
        ]
      },
    ]
  });
};
