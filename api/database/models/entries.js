const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entries', {
    id_entry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'uuid_user'
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
