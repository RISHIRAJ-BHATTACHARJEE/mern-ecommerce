import User from "../models/User";
import { loginSchema, registerSchema } from "../utils/zodValidation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const validation = registerSchema.safeParse(req.body); //Validate Input

    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.errors }); //If validation doesnot succeed return error
    }

    const { name, email, password } = req.body; //Get user name, email & password from body

    const existingUser = await User.findOne({ email }); //Check if user already exists

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
    console.log("error: ", error)
    res.status(500).json({ message: "Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    //Validate Input
    const validation = loginSchema.safeParse(req.body);

    //If validation doesnot succeed return error
    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.errors });
    }

    //Get user email & password from body
    const { email, password } = req.body;

    //Get user
    const user = await User.findOne({ email });

    //If user doesnot exists ask to register
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found, please register" });
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    //if password doesnot match return invalid credentials
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    //generate jwt token
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "24h" });

    // Set JWT in response header
    res.set("Authorization", `Bearer ${token}`);

    // Send response
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      }
    })
  } catch (error) {
    console.log("error: ", error)
    res.status(500).json({ message: "Server Error" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    //Get admin email & password from body
    const { email, password } = req.body;

    //Get admin
    const admin = await User.findOne({ email });

    //If admin doesnot exists ask to login again
    if (!admin) {
      return res
        .status(400)
        .json({ message: "Admin not found login again" });
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    //if password doesnot match return invalid credentials
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    //generate jwt token
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: admin._id }, secret, { expiresIn: "24h" });

    // Set JWT in response header
    res.set("Authorization", `Bearer ${token}`);

    // Send response
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        password: admin.password,
      }
    })
  } catch (error) {
    console.log("error: ", error)
    res.status(500).json({ message: "Server Error" });
  }
};
