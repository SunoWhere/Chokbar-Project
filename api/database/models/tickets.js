const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hash: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "tickets_hash_key"
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    id_ticket_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ticket_days',
        key: 'id_ticket_day'
      }
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
    tableName: 'tickets',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tickets_hash_key",
        unique: true,
        fields: [
          { name: "hash" },
        ]
      },
      {
        name: "tickets_pkey",
        unique: true,
        fields: [
          { name: "id_ticket" },
        ]
      },
    ]
  });
};
