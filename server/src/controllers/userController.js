import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Create new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Received data:- ", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    if (!user) {
      console.error("User creation failed due to validation errors");
      return res.status(400).json({ message: "Validation error" });
    }

    console.log("User created successfully:", user);

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(400).json({ message: "Error creating user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email})
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Login Failed"})
  }
}
