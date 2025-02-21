import Navbar from "@/components/Navbar";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toaster } from "@/components/ui/toaster"

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/register`,
        { name, email, password }
      );

      if (response.status === 201) {
        toaster.create({
          title: "Account created successfully!",
          type: "success",
        })
        navigate("/login")
      } else {
        console.error(response.data.message || "Signup failed");
        toaster.create({
          title: "Signup failed!",
          type: "error",
        })
      }

    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar value="signup" />
      <Toaster/>
      <div className="flex !px-20 gap-20">
        <img src="/auth-image.png" alt="auth-image" className="w-[47vw]" />
        <div className="flex flex-col gap-10 justify-center w-full">
          <h1 className="!text-5xl">Create an account</h1>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
            />
            <Button type="submit" className="!bg-[#DB4444] !text-white">
              Create Account
            </Button>
            <Button>
              <FcGoogle />
              Signup with Google
            </Button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="!underline !text-indigo-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
