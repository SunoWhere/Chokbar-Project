const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_renting', {
    id_equipment_rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rent_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_stand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stands',
        key: 'id_stand'
      }
    },
    id_equipment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipments',
        key: 'id_equipment'
      }
    }
  }, {
    sequelize,
    tableName: 'equipment_renting',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "equipment_renting_pkey",
        unique: true,
        fields: [
          { name: "id_equipment_rent" },
        ]
      },
    ]
  });
};
