const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stands', {
    id_stand: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locations',
        key: 'id_location'
      },
      unique: "stands_id_location_key"
    },
    id_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'providers',
        key: 'id_provider'
      }
    },
    id_stand_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stand_types',
        key: 'id_stand_type'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stands',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stands_id_location_key",
        unique: true,
        fields: [
          { name: "id_location" },
        ]
      },
      {
        name: "stands_pkey",
        unique: true,
        fields: [
          { name: "id_stand" },
        ]
      },
    ]
  });
};
