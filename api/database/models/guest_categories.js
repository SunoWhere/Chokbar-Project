const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guest_categories', {
    id_guest_category: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'guest_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guest_categories_pkey",
        unique: true,
        fields: [
          { name: "id_guest_category" },
        ]
      },
    ]
  });
};
