const BlogPost = require("../models/blogpost")

const createPost = async (req, res, next) => { //So this is going to look like a regular old express endpoint.
    //So this fucntion needs an async because we are saving a new customer object to the database.
        
        try{ //So since new BlogPost will throw an error if one of the attributes isnt provided we need a try catch block to keep it from hanging, so this will give an error message and status instead.
    
            const blogPost = new BlogPost({ 

                postContent: req.body.postContent,
                postTitle: req.body.postTitle
                
            }) 
        
            await blogPost.save() //So this is how we save this blogpost object to our database and thats it. Need await because this is an async function
        
            res.send('Success!') //This will show the user that the post was successful
       
        }
        catch(e){
            res.status(400).send('You are missing something') //This may not be the correct http code for bad request. Professor just put this so we have something just look it up if you need.
        } 
    }
    module.exports = createPost