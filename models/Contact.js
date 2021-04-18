// require mongoose pour créer de schema
const mongoose = require ('mongoose')
//create Contact schema
// const {Schema} = mongoose (c'est une méthode aussi  ou bien on écrit const schema= mongoose.Schema)
const schema= mongoose.Schema
const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  phone: 
 { type:  Number}
})
module.exports=Contact=mongoose.model('contact',contactSchema)
