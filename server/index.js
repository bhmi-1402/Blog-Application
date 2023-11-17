const express= require('express');
const dotenv= require('dotenv');
const cors=require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const connection=require('./database/db.js');
const router= require('./routes/routes.js')
dotenv.config();
 const app = express();
 app.use(cors());
 app.use(bodyParser.json({extended:true}))
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cookieParser());
 app.use(router);
 

 const PORT=9000;
 
 connection(); 
 app.get("/",(req,res)=>{
    res.send("munna is genius")
 })

 app.listen(PORT,()=>console.log(`server is running on ${PORT}`));
