const BlogPost = require("../models/blogpost")

const editPost = async (req, res, next) => { //So this is going to look like a regular old express endpoint.
    //So this fucntion needs an async because we are saving a new customer object to the database.
    
        const editPostID = req.body._id
        

        try{ 
    
           await BlogPost.findByIdAndUpdate(editPostID, {
            postContent: req.body.postContent
           })

            res.send('Successfully edited') 
        }
        catch(e){
            res.status(400).send('Bad request') //This may not be the correct http code for bad request. Professor just put this so we have something just look it up if you need.
        } 
    }
    
    module.exports = editPost