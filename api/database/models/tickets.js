const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id_ticket: {
      autoIncrement: true,
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
      allowNull: false
    },
    id_ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ticket_types',
        key: 'id_ticket_type'
      }
    },
    uuid_user: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'uuid_user'
      }
    },
    validated_at: {
      type: DataTypes.DATE,
      allowNull: true
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
