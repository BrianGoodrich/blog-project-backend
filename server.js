const app = require('./index')
require('dotenv').config()
const mongoose = require('mongoose')

const port = 5000

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, err => { //Takes 3 params, first is connection string, second is options that are being passed to the mongo driver, and the third is a callback function for error catching. it will fire this callback funciton and if it connected its fine if it didnt connect it will fire a console log for error.
  if (err){
    console.log('Oh no!', err) //If there is an error output this.
    return
  }

  console.log('Connected')
  //We need to put the linstener in this if statement so that no requests to the database in our code are executed before the connection to mongo is made.
  app.listen(port, () => {
    console.log(`Blog Server listening at http://localhost:${port}`)
  })
})