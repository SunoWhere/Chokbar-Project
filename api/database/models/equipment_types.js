const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_types', {
    id_equipment_type: {
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
    tableName: 'equipment_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "equipment_types_pkey",
        unique: true,
        fields: [
          { name: "id_equipment_type" },
        ]
      },
    ]
  });
};
