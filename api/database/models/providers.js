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
    uuid_user: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'uuid_user'
      },
      unique: "providers_uuid_user_key"
    },
    description_en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_fr: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'providers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "providers_pkey",
        unique: true,
        fields: [
          { name: "id_provider" },
        ]
      },
      {
        name: "providers_uuid_user_key",
        unique: true,
        fields: [
          { name: "uuid_user" },
        ]
      },
    ]
  });
};
