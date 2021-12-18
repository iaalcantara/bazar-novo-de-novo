const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URI

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch (error) {
        console.log(error.message)
    }
} 

module.exports = {
    connect
}