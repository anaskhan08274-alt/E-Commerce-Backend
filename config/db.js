const mongoose = require("mongoose")

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected successfully: ${conn.connection.host}`)
    }       

    catch (err) {
        console.log("MongoDB Connection Error:", err)
         process.exit(1); // Stop server if DB fails to connect
    }

}

module.exports = connectDB;