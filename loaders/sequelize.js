import { Sequelize } from 'sequelize'
import dotenv from "dotenv"

dotenv.config()

const user = process.env.USER
const password =  process.env.PASS
const host = process.env.HOST
const database = process.env.DB

export const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
})