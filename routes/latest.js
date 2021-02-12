const express = require('express');
const latestRouter = express.Router();
const blogModule = require('./../blog_Modules/blog');

latestRouter.get("/articles",(request,response)=>{
    const latestArticles = blogModule.latestArticles;
    response.send(latestArticles);
})

latestRouter.get("/details",(request,response)=>{
    const latestDetails = blogModule.latestDetails;
    response.send(latestDetails);
})

latestRouter.get("/stories",(request,response)=>{
    const latestStories = blogModule.latestStories;
    response.send(latestStories);
})

module.exports = latestRouter;