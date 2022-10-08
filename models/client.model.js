import { DataTypes  } from 'sequelize'
import { sequelize } from '../loaders/sequelize.js'
import { Invoice } from './invoice.model.js'

export const Client = sequelize.define('client', {
    clientID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    client_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    point_of_contact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    timestamps: false
})

Client.hasMany(
    Invoice, 
    {
        foreignKey: 'clientID',
        sourceKey: 'clientID'
    }
)

Invoice.belongsTo(
    Client,
    {
        foreignKey: 'clientID',
        targetKey: 'clientID'
    }
)

