const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entries', {
    id_entry: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'uuid_user'
      }
    },
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id_event'
      }
    }
  }, {
    sequelize,
    tableName: 'entries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "entries_pkey",
        unique: true,
        fields: [
          { name: "id_entry" },
        ]
      },
    ]
  });
};
