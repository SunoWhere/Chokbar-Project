const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket_types', {
    id_ticket_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ticket_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ticket_types_pkey",
        unique: true,
        fields: [
          { name: "id_ticket_type" },
        ]
      },
    ]
  });
};
