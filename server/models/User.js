import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

async function createAdmin() {
  try {
    const existingAdmin = await User.findOne({ email: "admin@example.com" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("test_admin_password", 10);
      await User.create({
        name: "test_admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      });
      console.log("Admin user created!");
    } else {
      console.log("Admin already exists!");
    }
  } catch (error) {
    console.error("Error creating admin:", error);
  }
}

createAdmin(); 

export default User;
