const express= require('express');
const {signupUser,loginUser}=require('../controller/user-controller.js');
const router = express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser)

// export default router;
module.exports = router;