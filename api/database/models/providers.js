const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('providers', {
    id_provider: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'uuid_user'
      },
      unique: "providers_id_user_key"
    }
  }, {
    sequelize,
    tableName: 'providers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "providers_id_user_key",
        unique: true,
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "providers_pkey",
        unique: true,
        fields: [
          { name: "id_provider" },
        ]
      },
    ]
  });
};
