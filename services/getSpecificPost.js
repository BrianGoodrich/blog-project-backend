const BlogPost = require("../models/blogpost")

const getSpecificPosts = async (req, res, next) => { 
    
    const postID = req.query.postID

        try{ 
    
          const specificPosts = await BlogPost.findById(postID, 'postContent')
        
            res.send(specificPosts) //This will show the user that the post was successful

        }
        catch(e){
           res.status(400).send('Bad request') //This may not be the correct http code for bad request. Professor just put this so we have something just look it up if you need.
        } 

    }

    module.exports = getSpecificPosts