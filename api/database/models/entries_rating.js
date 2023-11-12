const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entries_rating', {
    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'uuid_user'
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
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entries_rating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "entries_rating_pkey",
        unique: true,
        fields: [
          { name: "id_user" },
          { name: "id_entry" },
        ]
      },
    ]
  });
};
