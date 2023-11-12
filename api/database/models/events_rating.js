const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_rating', {
    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'uuid_user'
      }
    },
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'events',
        key: 'id_event'
      }
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'events_rating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "events_rating_pkey",
        unique: true,
        fields: [
          { name: "id_user" },
          { name: "id_event" },
        ]
      },
    ]
  });
};
