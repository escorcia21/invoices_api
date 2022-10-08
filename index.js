import { initDatabase } from "./loaders/sequelize.js"
import dotenv from "dotenv"
import app from "./app.js"

async function main() {
    dotenv.config()
    const port = process.env.PORT || 5500

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

