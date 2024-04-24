import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import axios from "axios";
import "./style.css";
import eye from"../assets/eye.png";
import closedEye from "../assets/closedEye.png";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:3000/users/login", {
        username,
        password,
      });

      // If login successful, dispatch login action with user data
      dispatch(login({ username, token: response.data.token }));
    } catch (error) {
      // Handle error
      console.error("Failed to login:", error);
      // Dispatch error action or set error state
    }
  };
  const handleTogglePassword=()=>{
    setShowPassword(!showPassword)
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="loginForm">
        <label htmlFor="email" className="Label">Enter email</label>
        <br />
        <input
          type="text"
          placeholder="example@email.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="loginForm">
        <label htmlFor="password" className="Label">Enter password</label>
        <br />
        <div className="passwordInput">
        <input
          type={showPassword?'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <img src={showPassword? closedEye:eye} 
        alt="toggle password visibility"
        onClick={handleTogglePassword}/>
        </div>
      </div>
      <button onClick={handleLogin} className="loginButton">Login</button>
      <p className="signup">Don’t have an account? Sign Up</p>
    </div>
  );
};

export default Login;
