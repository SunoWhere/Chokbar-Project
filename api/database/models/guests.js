const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guests', {
    id_guest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_guest_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'guest_categories',
        key: 'id_guest_category'
      }
    }
  }, {
    sequelize,
    tableName: 'guests',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guests_pkey",
        unique: true,
        fields: [
          { name: "id_guest" },
        ]
      },
    ]
  });
};
