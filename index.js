import { sequelize } from "./loaders/sequelize.js"
import dotenv from "dotenv"
import app from "./app.js"

const main = async () => {
    dotenv.config()
    const port = process.env.PORT || 5500

    try {
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    } catch (error) {
        console.log(error.message)
    }   
}

main()

