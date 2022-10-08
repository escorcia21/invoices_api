import { DataTypes } from 'sequelize'
import { sequelize } from '../loaders/sequelize.js'

export const Product = sequelize.define('product', {
    productID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
},
{
    timestamps: false
}
)