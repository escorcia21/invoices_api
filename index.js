import { initDatabase } from "./loaders/sequelize.js"
import dotenv from "dotenv"
import { app } from "./app.js"

const port = process.env.PORT || 3000
dotenv.config()

async function main() {
    try {
        const sequelize = initDatabase()
        await sequelize.authenticate()
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    } catch (error) {
        console.log(error.message)
    }   
}

main()

