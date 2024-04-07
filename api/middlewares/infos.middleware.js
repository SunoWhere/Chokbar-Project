const validator = require("validator")

exports.validateName = (req, res, next) => {
    if(!validateName(req.body.name)) {
        return res.status(400).send("Invalid format for name")
    }
    next()
}

exports.validateDates = (req, res, next) => {
    if(!validateDateFormtat(req.body.start_date) || !validateDateFormtat(req.body.end_date)) {
        return res.status(400).send("Invalid format for dates")
    } else if(!validateDates(req.body.start_date, req.body.end_date)) {
        return res.status(400).send("Invalid dates, start date is greater than end date")
    }
    next()
}

const validateName = (name) => {
    if(!name) return false
    return validator.isLength(name, {max: 50})
}

const validateDateFormtat = (date) => {
    if(!date) return false
    return !isNaN(new Date(date))
}

const validateDates = (date_inf, date_sup) => {
    const t_date_inf = new Date(date_inf).getTime()
    const t_date_sup = new Date(date_sup).getTime()
    return (t_date_inf < t_date_sup)
}