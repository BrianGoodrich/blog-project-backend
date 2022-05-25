const BlogPost = require("../models/blogpost")

const deletePost = async (req, res, next) => { 
    
    const postID = req.query.postID

        try{ 
    
            await BlogPost.findByIdAndRemove(postID)
        
            res.send(`Post ${postID} deleted`) //This will show the user that the post was successful

        }
        catch(e){
           res.status(400).send('Bad request') //This may not be the correct http code for bad request. Professor just put this so we have something just look it up if you need.
        } 

    }

    module.exports = deletePost