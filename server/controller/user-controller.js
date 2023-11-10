const User= require('../model/user.js')

const signupUser = async(req,res) =>{
try {
    const user=req.body;
    const newUser= new User(user);
    await newUser.save();

    return response.status(200).json({msg:'signup successfull'})
    
} catch (error) {
    return response.status(500).json({msg:"error while signup "})
}
}