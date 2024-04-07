const CustomError = require("../utils/CustomError")
const {sequelize} = require('../database/DB.connection')

exports.getName = async () => {
    try {
        const result = await sequelize.query(
            `SELECT *
            FROM convention_name
            LIMIT 1`,
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

exports.getDates = async () => {
    try {
        const result = await sequelize.query(
            `SELECT *
            FROM convention_dates
            LIMIT 1`,
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


exports.updateName = async (name) => {
    try {
        await sequelize.query(
            `UPDATE convention_name
            SET name = ?
            WHERE id_name = 1`,
            {
                type: sequelize.QueryTypes.SELECT,
                replacements: [`${name}`],
            }
        )
    } catch (err) {
        console.log(err)
        throw err
    }
}


exports.updateDates = async (start_date, end_date) => {
    try {
        await sequelize.query(
            `UPDATE convention_dates
            SET start_date = ?, end_date = ?
            WHERE id_date = 1`,
            {
                type: sequelize.QueryTypes.UPDATE,
                replacements: [`${start_date}`, `${end_date}`],
            }
        )
    } catch (err) {
        console.log(err)
        throw err
    }
}