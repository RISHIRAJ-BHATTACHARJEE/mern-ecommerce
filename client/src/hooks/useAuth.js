import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Get token from the local storage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    //Fetch current user
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/current`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data); //Store user data in state
      } catch (error) {
        console.error("Failed to feth user:- ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  //Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    redirect("/login")
  };

  return { user, loading, logout };
};
