const BlogPost = require("../models/blogpost")

const getPosts = async (req, res, next) => { 
    
    

        try{ 
    
          const allPosts = await BlogPost.find({}, 'postContent postTitle')
        
            res.send(allPosts) //This will show the user that the post was successful

        }
        catch(e){
           res.status(400).send('Bad request') //This may not be the correct http code for bad request. Professor just put this so we have something just look it up if you need.
        } 

    }

    module.exports = getPosts