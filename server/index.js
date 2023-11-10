const express= require('express');
const dotenv= require('dotenv');

const Connection=require('./database/db.js');
const Router= require('./routes/routes.js')

 const app = express();
 app.use('/',Router);
 dotenv.config();



 const PORT=9000;
 
 Connection(); 

 app.listen(PORT,()=>console.log(`server is running on ${PORT}`));
