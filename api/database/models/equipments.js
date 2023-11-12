const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipments', {
    id_equipment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_equipment_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipment_types',
        key: 'id_equipment_type'
      }
    }
  }, {
    sequelize,
    tableName: 'equipments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "equipments_pkey",
        unique: true,
        fields: [
          { name: "id_equipment" },
        ]
      },
    ]
  });
};
