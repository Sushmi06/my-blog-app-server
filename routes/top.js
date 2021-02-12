const express = require('express');;
const topRouter = express.Router();
const blogModule = require('./../blog_Modules/blog');

topRouter.get("/stories",(request,response)=>{
    const topStories = blogModule.topStory();
    response.send(topStories);
})

topRouter.get("/subPosts",(request,response)=>{
    const topSubPosts = blogModule.topSubPosts();
    response.send(topSubPosts);
})

module.exports = topRouter;