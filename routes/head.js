const express = require('express');
const headRouter = express.Router();
const blogModule = require('./../blog_Modules/blog');

headRouter.get("/parts",(request,response)=>{
    const headPartDetails = blogModule.headParts;
    response.send(headPartDetails);
})

headRouter.get("/text",(request,response)=>{
    const headTextDetails = blogModule.headText;
    response.send(headTextDetails);
})

module.exports = headRouter;