const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stand_types', {
    id_stand_type: {
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
    tableName: 'stand_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stand_types_pkey",
        unique: true,
        fields: [
          { name: "id_stand_type" },
        ]
      },
    ]
  });
};
