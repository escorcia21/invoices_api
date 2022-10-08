import { Sequelize } from 'sequelize'

export function initDatabase() {
  
  const user = process.env.USER
  const password =  process.env.PASS
  const host = process.env.HOST
  const database = process.env.DB

  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
  })

  return sequelize
}

