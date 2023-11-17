
// const bcrypt=require('bcrypt')
const user= require('../model/user.js')

const signupUser = async(request,response) =>{
try {
    
    // const hashedPassword = await bcrypt.hash(request.body.password,10);
// const user = {username: request.body.username,name:request.body.name,password:hashedPassword}
    const userr =request.body;
    const newUser= new user(userr);
    await newUser.save();

    return response.status(400).json({msg:'Signup successfull'})
    
} catch (error) {
    return response.status(500).json({msg:"error while signing up user"})
}
}
module.exports=signupUser;