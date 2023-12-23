const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    id_event: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    max_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    starting_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finishing_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locations',
        key: 'id_location'
      }
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "events_pkey",
        unique: true,
        fields: [
          { name: "id_event" },
        ]
      },
    ]
  });
};
