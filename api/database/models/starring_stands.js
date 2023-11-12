const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('starring_stands', {
    id_guest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'guests',
        key: 'id_guest'
      }
    },
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stands',
        key: 'id_stand'
      }
    }
  }, {
    sequelize,
    tableName: 'starring_stands',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "starring_stands_pkey",
        unique: true,
        fields: [
          { name: "id_guest" },
          { name: "id_stand" },
        ]
      },
    ]
  });
};
