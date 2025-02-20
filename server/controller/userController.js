import User from "../models/User";
import { registerSchema } from "../utils/zodValidation";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const validation = registerSchema.safeParse(req.body); //Validate Input
    
    if (!validation.success) { 
      return res.status(400).json({ errors: validation.error.errors }); //If validation doesnot succeed return error
    }

    const { name, email, password } = req.body; //Get user name, email & password from body

    const existingUser = await User.findOne({ email });    //Check if user already exists

    //If user exists ask to login
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, try logging in" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //hash the password before saving

    //Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //Save the created user
    await user.save();

    //Once user is created return user
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const loginUser = async (req, res) => {};
