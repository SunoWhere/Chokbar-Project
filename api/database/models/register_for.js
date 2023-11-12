const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('register_for', {
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'events',
        key: 'id_event'
      }
    },
    id_entry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entries',
        key: 'id_entry'
      }
    }
  }, {
    sequelize,
    tableName: 'register_for',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "register_for_pkey",
        unique: true,
        fields: [
          { name: "id_event" },
          { name: "id_entry" },
        ]
      },
    ]
  });
};
