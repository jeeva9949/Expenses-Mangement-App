
// import { Express } from "express"

const express = require("express")

const { loginController, registerController } = require("../controllers/userController")


// router object
const router = express.Router()
console.log(router);

// routers
// POST || LOGIN

router.post("/login", loginController)


// post  || Resigter user
router.post("/register",registerController)




module.exports = router;