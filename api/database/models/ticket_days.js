const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket_days', {
    id_ticket_day: {
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
    }
  }, {
    sequelize,
    tableName: 'ticket_days',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ticket_days_pkey",
        unique: true,
        fields: [
          { name: "id_ticket_day" },
        ]
      },
    ]
  });
};
