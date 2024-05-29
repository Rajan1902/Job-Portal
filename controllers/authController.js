import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const { name, email, password } = req.body;
    // validate
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "please provide firstName" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "please provide email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "please provide password" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "email already exists" });
    }
    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "Error while registering user",
      success: false,
      err,
    });
  }
};
