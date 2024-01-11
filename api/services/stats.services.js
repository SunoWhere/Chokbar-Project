const {sequelize} = require('../database/DB.connection')

exports.getTotalUsers = async () => {
    try {
        const result = await sequelize.query(
            `SELECT COUNT(*) as users_total
            FROM users
            INNER JOIN roles ON users.id_role = roles.id_role
            WHERE roles.name = 'user'`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        return result[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getTotalProviders = async () => {
    try {
        const result = await sequelize.query(
            `SELECT COUNT(*) as providers_total
            FROM providers`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        return result[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getTotalProducts = async () => {
    try {
        const result = await sequelize.query(
            `SELECT COUNT(*) as products_total
            FROM products`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        return result[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getTicketsSales = async () => {
    try {
        const result = await sequelize.query(
            `SELECT ticket_types.id_ticket_type, ticket_types.name, COUNT(id_ticket) tickets_total
            FROM tickets
            INNER JOIN ticket_types ON tickets.id_ticket_type = ticket_types.id_ticket_type
            GROUP BY ticket_types.id_ticket_type`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getProductsSales = async () => {
    try {
        const result = await sequelize.query(
            `SELECT stands.id_stand, stands.name, SUM(order_lines.quantity * order_lines.price)
            FROM orders
            INNER JOIN order_lines ON orders.id_order = order_lines.id_order
            INNER JOIN stands ON orders.id_stand = stands.id_stand
            GROUP BY stands.id_stand`,
            {
                type: sequelize.QueryTypes.SELECT
            }
        )
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}