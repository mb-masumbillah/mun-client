import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { jwtDecode } from "jwt-decode";

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded user role:", decoded?.role);

        // 🔥 setState এখন synchronous effect body তে call হবে না
        Promise.resolve().then(() => {
          setUser(token);
          setRole(decoded?.role);
        });

      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("accessToken");
      }
    }
  }, []);

  const login = async (data) => {
    try {
      const response = await axiosPublic.post("/auth/login", data);
      const accessToken = response?.data?.data?.accessToken;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        setUser(accessToken);
        const decoded = jwtDecode(accessToken);
        setRole(decoded?.role);
        console.log("Login token decoded:", decoded);
        alert("Login successful 🥰");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setRole(null);
    alert("Logout successful");
  };

  const authInfo = { login, logout, user, role };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
