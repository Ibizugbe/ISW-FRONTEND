import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const { email, phoneNumber, password, confirmPassword } = formData;
  const handleOnChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const isValidEmail = () => {
    // regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

//   const isValidPhoneNumber = (phoneNumber) => {
//     // Regular expression for basic phone number validation {13 digits}
//     const phoneRegex = /^\d{13}$/;
//     return phoneRegex.test(phoneNumber);
//   };

  const isValidPassword = (password) => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    // if (!formData.phoneNumber) {
    //   newErrors.phoneNumber = "Phone number is required";
    // } else if (!isValidPhoneNumber(formData.phoneNumber)) {
    //   newErrors.phoneNumber = "Phone number must be 13 digits with +234";
    // }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long ";
    }
    // if (!formData.confirmPassword) {
    //   newErrors.confirmPassword = "confirm password is required";
    // } else if (formData.confirmPassword !== formData.password) {
    //   newErrors.confirmPassword = "Passwords must match";
    // }
    setError(newErrors);

    return object.keys(newErrors).length === 0;
  };

  //   const passwordInput = () => {
  //     // const [Password, setPassword] = useState(" ");
  //     const [showPassword, setShowPassword] = useState(false);

  //     const togglePasswordVisibility = () => {
  //       setShowPassword(!showPassword);
  //     };
  //   };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("form submitted", formData);
    } else {
      console.log("form validation failed");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className=" p-16 bg-white-200 border border-solid rounded-lg"
        onSubmit={handleOnSubmit}
      >
        <div>
          <h className="flex justify-center lg:font-mono pt-5 text-lg">
            Login
          </h>
          
        </div>
        
        <div className="">
          <label className="block  text-xs px-2 pt-8">Enter Email</label>
          <input
            placeholder="example@gmail.com"
            type="text"
            value={email}
            name="email"
            onChange={handleOnChange}
            className="bg-gray-200 w-full p-3 rounded"
          />
          {error.email && (
            <div className="error text-red-500">{error.email}</div>
          )}

    
        </div>
        <div className="relative">
          <label className="block text-xs px-2 pt-8">Enter password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleOnChange}
            className="bg-gray-200 px-2 w-full b-2 p-3 rounded"
          />

          <div className="relative top-12">
            {/* please note both icons are merged together incase of writing the code for functionality */}
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-4 bottom-14 cursor-pointer "
            />
          </div>
          {error.password && (
            <div className="error text-red-500">{error.password}</div>
          )}
        
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="bg-black w-full text-white text-sm p-3 rounded "
          >
            Login
          </button>
        </div>
        <p className="pt-8 text-sm pb-8 flex justify-center">
          Dont have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
