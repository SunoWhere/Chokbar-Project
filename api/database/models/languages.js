const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('languages', {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'languages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "languages_pkey",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
