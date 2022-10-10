import { DataTypes } from 'sequelize'
import { sequelize } from '../loaders/sequelize.js'

export const Invoice = sequelize.define('invoice', {
    invoice_number: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    discount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}, 
{
    timestamps: false
})

