// mongoose
const mongoose = require('mongoose')
//connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    console.log(`DB is connected...`)
  } catch (error) {
    console.error(`DB can not connected ${error}`)
  }
}
module.exports = connectDB
