import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  selectLoading,
  selectError,
} from "../redux/slices/authSlice";
import "./style.css";
import eye from "../assets/images/eye.png";
import closedEye from "../assets/images/closedEye.png";
import { Link } from "react-router-dom/dist";

const Registration = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState("shopper");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };
  return (
    <div className="registration">
      <div className="headerWrap">
        <h2 className="Sign">Sign Up</h2>
        {error && <p>{error}</p>}
        <p>Enter your details to create your account</p>
        <div className="navButton">
          <button
            className={selectedUser === "storeOwner" ? "active" : ""}
            onClick={() => handleUserSelection("storeOwner")}
          >
            Store owner
          </button>
          <button
            className={selectedUser === "shopper" ? "active" : ""}
            onClick={() => handleUserSelection("shopper")}
          >
            Shopper
          </button>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
                className="passwrd"
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
                type={showConfirmPassword ? "text" : "password"}
                className="passwrd"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={showConfirmPassword ? closedEye : eye}
                alt="toggle password visibility"
                onClick={handleToggleConfirmPassword}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="signUpButton"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "Registering..." : "Create my account"}
      </button>

      <p className="loginAccount">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Registration;
