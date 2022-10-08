import { DataTypes } from 'sequelize'
import { sequelize } from '../loaders/sequelize.js'
import { Invoice } from './invoice.model.js'
import { Product } from './product.model.js'

export const InvoiceDetail = sequelize.define('invoice_detail', {
    detailID: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE,
    }, 
},
{
    timestamps: false
})


Invoice.hasMany(
    InvoiceDetail,
    {
        foreignKey: 'invoiceID',
        sourceKey: 'invoice_number'
    }
)


InvoiceDetail.belongsTo(
    Invoice,
    {
        foreignKey: 'invoiceID',
        targetKey: 'invoice_number'
    }
)



Product.hasMany(
    InvoiceDetail,
    {
        foreignKey: 'productID',
        sourceKey: 'productID'
    }
)

InvoiceDetail.belongsTo(
    Product,
    {
        foreignKey: 'productID',
        targetKey: 'productID'
    }
)