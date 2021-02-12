const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const blogModule = require('./blog_Modules/blog')
const headDetails = require('./routes/head');
const latestDetails = require('./routes/latest');
const topDetails = require('./routes/top');

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.get("/",(request,response)=>{ 
    response.send("This is My Blog App server");
})

app.get("/menu",(request,response)=>{
    const menuDetails = blogModule.menuDetails();    
    response.send(menuDetails);
})

app.get("/bollyWood",(request,response)=>{
    const bollyWoodDetails = blogModule.bollyWoodDetails;
    response.send(bollyWoodDetails);
})

app.get("/footer",(request,response)=>{
    const footerDetails = blogModule.footerDetails;
    response.send(footerDetails);
})

app.use("/head",headDetails);

app.use("/latest",latestDetails);

app.get("/reactPage",(request,response)=>{
    const reactPage = blogModule.reactPage;
    response.send(reactPage);
})

app.use("/top",topDetails);

app.listen(PORT,()=>{
    console.log("server is running.....")
})