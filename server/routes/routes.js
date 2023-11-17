const express= require('express');
const signupUser=require('../controller/user-controller.js');
const router=express.Router();

router.get('/signup',signupUser);

// export default router;
module.exports = router;