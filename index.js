const express = require('express')
const app = express()
const path = require('path')
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const CreatePost = require('./services/createPost')
const DeletePost = require('./services/deletePost')
const EditPost = require('./services/editPost')
const GetAllPost = require('./services/getPost')
const GetSpecificPost = require('./services/getSpecificPost')


app.use(express.static(path.join(__dirname, 'build'))) //This will allow express to join the path with our build folder.
app.options('*', corsOptionsRequests)//cors stuff to run on local browser
app.use(corsSimpleRequests)//cors stuff to run on local browser
app.use(bodyParser.json()) //Will allow you to use json bodies returned from api calls.
app.use(bodyParser.urlencoded({ extended: true })) //enables url encoding for the json docs we get so that if special chars are used it converts to ASCII
app.use(removePoweredBy)




app.get('/', (req,res) => { //This will allow our react app to join paths with our express server at the default home page /
    res.sendFile(path.join(__dirname, 'build', 'index.html')) //We are serving this to the index.html file in the frontend
})

app.post('/createBlogPost', CreatePost)
app.get('/delete', DeletePost)
app.post('/edit', EditPost)
app.get('/getall', GetAllPost)
app.get('/getapost', GetSpecificPost)

module.exports = app