const {v4: uuid4} = require("uuid")
const UserModel = require("../database/DB.connection").DB_models.users
const CartLinesModel = require("../database/DB.connection").DB_models.cart_lines
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductStatesModel = require("../database/DB.connection").DB_models.product_states
const {sequelize} = require('../database/DB.connection') 


exports.deleteUserById = async (uuid) => {
    try {
        const res = await UserModel.destroy({
            where: {
                uuid_user: uuid
            }
        })
        if (res === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.updateUserById = async (uuid, email, password, first_name, last_name) => {
    try {
        const res = await UserModel.update({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
        }, {
            where: {
                uuid_user: uuid
            }
        })

        if (res[0] === 0)
            throw new Error("User not found")
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.verifyLogin = async (email, password) => {
    try {
        const data = await UserModel.findAll({
            where: {
                email: email,
                password: password
            }
        })
        if (data.length !== 0) {
            // console.log(data[0].dataValues.uuid_user)
            return data[0].dataValues.uuid_user
        } else throw new Error("Invalid email or login")
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.saveUser = async (email, password, first_name, last_name) => {
    try {
        await UserModel.create({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            id_role: 1
        })
    } catch (err) {
        console.log(err)

        if (err.name === "SequelizeUniqueConstraintError")
            throw new Error("Account with this email already exist")

        throw err
    }
}

exports.getUsers = async () => {
    try {
        const data = await UserModel.findAll({
            attributes: ["uuid_user","first_name", "last_name", "email", "id_role"]
        })
        if (data.length === 0)
            throw new Error("No user found")
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getUserByID = async (uuid) => {
    try {
        const user = await UserModel.findAll({
            attributes: ["uuid_user","first_name", "last_name", "email", "id_role"],
            where: {
                uuid_user: uuid
            }
        })
        if (user.length === 0)
            throw new Error("No user found")
        else return user
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getCart = async (uuid) => {
    try {
        const cart = await CartLinesModel.findAll({
            where: {
                uuid_user: uuid
            },
            attributes: {
                exclude: ['id_product', 'uuid_user']
            },
            include: {
                model: ProductsModel, as: 'id_product_product',
                attributes: {
                    exclude: ['description_en', 'description_fr', 'id_product_state', 'id_product_type', 'quantity']
                }
            }
        })
        for (item of cart) {
            item.dataValues.product = item.dataValues.id_product_product
            delete item.dataValues.id_product_product            
        }
        return cart
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.addToCart = async (uuid, id_product, quantity) => {
    const transac = await sequelize.transaction()
    try {
        let item = null
        const itemAlreadyInCart = await CartLinesModel.findOne({
            where: {
                uuid_user: uuid,
                id_product: id_product
            },
            include: {
                model: ProductsModel, as: 'id_product_product'
            }
        })
        if(itemAlreadyInCart) {
            itemAlreadyInCart.dataValues.product = itemAlreadyInCart.dataValues.id_product_product
            delete itemAlreadyInCart.dataValues.id_product_product
        }
        const product = await ProductsModel.findOne({
            where: {
                id_product: id_product
            },
            include: {
                model: ProductStatesModel, as: 'id_product_state_product_state'
            }
        })
        product.dataValues.product_state = product.dataValues.id_product_state_product_state
        delete product.dataValues.id_product_state_product_state
        console.log(product.dataValues.product_state)
        if(product.dataValues.product_state.dataValues.state !== 'Available') {
            throw new Error('Product not available')
        } else if(product.dataValues.quantity < quantity) {
            throw new Error('Not enough quantity remaining in stock')
        }
        if(itemAlreadyInCart) {
            let new_quantity = quantity + itemAlreadyInCart.dataValues.quantity
            item = await CartLinesModel.update({quantity: new_quantity}, {
                where: {
                    uuid_user: uuid,
                    id_product: id_product
                }
            })
        } else {
            item = await CartLinesModel.create({
                uuid_user: uuid,
                id_product: id_product,
                quantity: quantity
            })
        }
        let new_quantity = product.dataValues.quantity - quantity
        await ProductsModel.update({quantity: new_quantity}, {
            where: {
                id_product: id_product
            }
        })
        transac.commit()
    } catch (err) {
        console.log(err)
        transac.rollback()
        throw err
    }
}