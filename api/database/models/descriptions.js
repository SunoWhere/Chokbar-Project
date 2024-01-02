const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descriptions', {
    id_description: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'providers',
        key: 'id_provider'
      }
    },
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stands',
        key: 'id_stand'
      }
    },
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'id_event'
      }
    },
    language_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'languages',
        key: 'language_name'
      }
    }
  }, {
    sequelize,
    tableName: 'descriptions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "descriptions_pkey",
        unique: true,
        fields: [
          { name: "id_description" },
        ]
      },
    ]
  });
};