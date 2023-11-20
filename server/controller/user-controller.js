
const bcrypt = require('bcrypt');
const user= require('../model/user.js')
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const Token=require('../model/token.js');
dotenv.config();
const signupUser = async(request,response) =>{

try {
    
    const hashedPassword = await bcrypt.hash(request.body.password,10);
const uSerr = {username: request.body.username,name:request.body.name,password:hashedPassword};
    // const userr =request.body;
    const newUser= new user(uSerr);
    await newUser.save();

    return response.send("Success");
    
} catch (error) {
    return response.send({
        error,
        msg:"Error"
    })
}
}
const loginUser=async(req,response)=>{
let uSerr=await user.findOne({username: req.body.username});
if(!uSerr){
return response.send({msg:"password does not match"});
}
try{
    await bcrypt.compare(req.body.password, user.password)
    if(match){
const accessToken=jwt.sign(uSerr.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'});
const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEYS);

const newToken=new Token({token: refreshToken})
await newToken.save();

return response.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username});
    }
    else{
        response.send({msg:'password does not match'})
    }
}
catch(error){
return response.send({msg:'error'})
}
}
module.exports={signupUser,loginUser};