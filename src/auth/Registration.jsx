// Registration.js

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../redux/slices/registrationSlice";
import axios from "axios";
import "./style.css";
import eye from "../assets/eye.png";
import closedEye from "../assets/closedEye.png";

const Registration = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector(
    (state) => state.registration.isRegistering
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState("shopper");

  const handleRegister = async () => {
    dispatch(registerRequest());

    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post("http://127.0.0.1:3000/users/sign_up", {
        username,
        password,
      });

      // On success, dispatch registerSuccess action
      dispatch(registerSuccess());
    } catch (error) {
      // On failure, dispatch registerFailure action with error message
      dispatch(registerFailure(error.message));
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };
  return (
    <div className="registration">
      <div className="headerWrap">
        <h2 className="Sign">Sign Up</h2>
        <p>Enter your details to create your account</p>
        <div className="navButton">
          <button className={selectedUser === "storeOwner"? "active": ""}
          onClick={() => handleUserSelection("storeOwner")}
          >Store owner</button>
          <button className={selectedUser === "shopper" ? "active" : ""}
          onClick={()=> handleUserSelection("shopper")}
          >Shopper</button>
        </div>
      </div>
      <div className="signupForm">
        <label htmlFor="email" className="Label2">
          Email
        </label>
        <br />
        <input
          type="email"
          placeholder=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="signupForm">
        <label htmlFor="number" className="Label2">
          Phone Number
        </label>
        <br />
        
          <input
            type="number"
            placeholder="+234 812-345-6789"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        <div className="passwordWrapper">
          <div className="Password">
            <label htmlFor="number" className="Label2">
              Create a password
            </label>
            <br />
            <div className="passwordInput2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="|"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? closedEye : eye}
                alt="toggle password visibility"
                onClick={handleTogglePassword}
              />
            </div>
            <p className="validation">Must have at least 8 characters</p>
          </div>

          <div className="Password">
            <label htmlFor="number" className="Label2">
              Confirm Password
            </label>
            <br />
            <div className="passwordInput2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="|"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? closedEye : eye}
                alt="toggle password visibility"
                onClick={handleTogglePassword}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="signUpButton"
        onClick={handleRegister}
        disabled={isRegistering}
      >
        {isRegistering ? "Registering..." : "Create my account"}
      </button>

      <p className="loginAccount">Already have an account? Log In</p>
    </div>
  );
};

export default Registration;
