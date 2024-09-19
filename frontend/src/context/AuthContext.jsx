import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Login
  const login = (username, email, password) => {
    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  // Signup
  const signup = (username, email, country, password) => {
    fetch("/users/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, country, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  // Logout
  const logout = () => {
    fetch("/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire("Success", "Logout success", "success");
        nav("/login");
        setCurrentUser(null);
        setOnChange(!onChange);
      });
  };

  // Fetch current user
  useEffect(() => {
    fetch("/current_user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.currentUser) {
          setCurrentUser(response.currentUser);
        }
      });
  }, [onChange]);

 // Delete current user profile
const deleteUser = (id) => {
    fetch("/users/delete/:id", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!onChange)
        if (response.success) {
          Swal.fire("Success", "User deleted successfully", "success");
          nav("/signup");
          setCurrentUser(null);
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Failed to delete user", "error");
        }
      });
  };
//update profile
  const update = (username, email, country) => {
    
    fetch(`/users/edituser/:id`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ username, email, country }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };
  
  


  const contextData = {
    login,
    signup,
    current_user: currentUser,
    logout,
    deleteUser,
    update
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
