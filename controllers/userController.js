const userModel = require("../models/userModel");



// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email, password });
    if (!user) {
      res.status(404).send("User Not Found");
    }
    res.status(200).json({ user, success: true });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// register controller
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
