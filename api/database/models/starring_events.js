const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('starring_events', {
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'events',
        key: 'id_event'
      }
    },
    id_guest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'guests',
        key: 'id_guest'
      }
    }
  }, {
    sequelize,
    tableName: 'starring_events',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "starring_events_pkey",
        unique: true,
        fields: [
          { name: "id_event" },
          { name: "id_guest" },
        ]
      },
    ]
  });
};
