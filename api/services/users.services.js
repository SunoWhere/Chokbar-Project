const {v4: uuid4} = require("uuid")
const CustomError = require("../utils/CustomError");
const UserModel = require("../database/DB.connection").DB_models.users
const CartLinesModel = require("../database/DB.connection").DB_models.cart_lines
const ProductsModel = require("../database/DB.connection").DB_models.products
const ProductStatesModel = require("../database/DB.connection").DB_models.product_states
const OrdersModel = require("../database/DB.connection").DB_models.orders
const OrderStatesModel = require("../database/DB.connection").DB_models.order_states
const OrderLinesModel = require("../database/DB.connection").DB_models.order_lines
const {sequelize} = require('../database/DB.connection'); 
const { Sequelize } = require("sequelize");


// Return the number of affected row
exports.deleteUserById = async (uuid) => {
    try {
        const res = await UserModel.destroy({
            where: {
                uuid_user: uuid
            }
        })
        return res[0]
    } catch (err) {
        console.log(err)
        throw err
    }
};
// Return the number of affected row
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
        return res[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.verifyLogin = async (email, password) => {
    try {
        return await UserModel.findOne({
            where: {
                email: email,
                password: password
            }
        })
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
        throw err
    }
}

exports.getUsers = async () => {
    try {
        return await UserModel.findAll({
            attributes: ["uuid_user", "first_name", "last_name", "email", "password", "id_role"]
        })
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.getUserByID = async (uuid) => {
    try {
        return await UserModel.findOne({
            attributes: ["uuid_user", "first_name", "last_name", "email", "password", "id_role"],
            where: {
                uuid_user: uuid
            }
        })
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

exports.deleteItemFromCart = async (uuid, id_product) => {
    const transac = await sequelize.transaction()
    try {
        const itemAlreadyInCart = await CartLinesModel.findOne({
            where: {
                uuid_user: uuid,
                id_product: id_product
            }
        })
        if(!itemAlreadyInCart) {
            throw new CustomError('Product not in user cart', 404)
        }
        const product = await ProductsModel.findOne({
            where: {
                id_product: id_product
            }
        })
        if(!product) {
            throw new CustomError('Product not found', 404)
        }
        const new_quantity = itemAlreadyInCart.dataValues.quantity + product.dataValues.quantity
        console.log(new_quantity)
        await ProductsModel.update({quantity: new_quantity}, {
            where: {
                id_product: id_product
            }
        })
        await CartLinesModel.destroy({
            where: {
                uuid_user: uuid,
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

exports.clearCart = async (uuid) => {
    const transac = await sequelize.transaction()
    try {
        const items = await CartLinesModel.findAll({
            where: {
                uuid_user: uuid
            }
        })
        if(items.length === 0) {
            throw new CustomError('Empty cart', 404)
        }
        for(item of items) {
            await this.deleteItemFromCart(uuid, item.dataValues.id_product)
        }
        transac.commit()
    } catch (err) {
        console.log(err)
        transac.rollback()
        throw err
    }
}

exports.getOrders = async (uuid) => {
    try {
        const orders = await OrdersModel.findAll({
            where: {
                uuid_user: uuid
            }
        })
        if(orders.length === 0) {

        }
        return orders
    } catch (err) {
        console.log(err)
        throw err
    }
}

exports.saveOrder = async (uuid) => {
    const transac = await sequelize.transaction()
    try {
        const cart_stand_distinct = await sequelize.query(
            `SELECT 
                DISTINCT id_stand
            FROM cart_lines 
            INNER JOIN products ON cart_lines.id_product = products.id_product 
            WHERE uuid_user = ?`,
        {
            type: sequelize.QueryTypes.SELECT,
            replacements: [`${uuid}`],
        })
        const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        
        for(stand of cart_stand_distinct) {
            let hash = ''
            for (let i = 0; i < 256; i++) {
                hash += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
            }
            const order_state = await OrderStatesModel.findOne({where: {state: 'Waiting'}})
            const stand_id = stand.id_stand
            const order_state_id = order_state.dataValues.id_order_state
            const new_order = await OrdersModel.create({
                hash: hash, 
                id_stand: stand_id, 
                uuid_user: uuid,
                id_order_state: order_state_id
            })
            const cart_lines_stand = await sequelize.query(
                `SELECT cart_lines.id_product, 
                        cart_lines.quantity,
                        price 
                FROM cart_lines 
                INNER JOIN products ON cart_lines.id_product = products.id_product
                WHERE products.id_stand = ?;`,
            {
                type: sequelize.QueryTypes.SELECT,
                replacements: [`${stand_id}`],
            })
            for(line of cart_lines_stand) {
                console.log(line)
                const product_id = line.id_product
                const quantity = line.quantity
                const price = line.price
                const order_id = new_order.dataValues.id_order
                await OrderLinesModel.create({id_product: product_id, price: price, quantity: quantity, id_order: order_id})
                await CartLinesModel.destroy({where: {id_product: product_id, uuid_user: uuid}})
            }
        }
        transac.commit()
    } catch (err) {
        console.log(err)
        transac.rollback()
        throw err
    }
}