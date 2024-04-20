import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
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

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation {13 digits}
    const phoneRegex = /^\d{13}$/;
    return phoneRegex.test(phoneNumber);
  };

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
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 13 digits with +234";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long ";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
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
    <div className="flex justify-center m-10 p-6">
      <form
        className="p-9 bg-white-200 border border-solid rounded-lg"
        onSubmit={handleOnSubmit}
      >
        <div>
          <h className="flex justify-center lg:font-mono pt-5 text-lg">
            Sign up
          </h>
          <p className="flex justify-center text-gray-40  pt-2 text-xs">
            Enter your details to create an account
          </p>
        </div>
        <div className="flex pt-8  ">
          <button className="bg-gray-500 whitespace-pre hover:bg-black hover:text-white text-sm  w-full py-4 px-14 rounded-t-lg ">
            Store Owner
          </button>
          <button className=" bg-gray-500 hover:bg-black hover:text-white text-sm py4- px-14 w-full rounded-t-lg">
            Shopper
          </button>
        </div>
        <div className="">
          <label className="block  text-xs px-2 pt-8">Email</label>
          <input
            placeholder="example@gmail.com"
            type="text"
            value={email}
            name="email"
            onChange={handleOnChange}
            className="bg-gray-200 w-full p-3 b-2 rounded"
          />
          {error.email && (
            <div className="error text-red-500">{error.email}</div>
          )}

          <label className="block text-xs px-2 pt-8">Phone Number</label>
          <input
            placeholder="+234 812 345-6789"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            className="bg-gray-200 w-full p-3 rounded "
          />
          {error.phoneNumber && (
            <div className="error text-red-500">{error.phoneNumber}</div>
          )}
        </div>
        <div className="relative">
          <label className="block text-xs px-2 pt-8">Create a password</label>
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
          <label className="block text-xs px-2 pt-8">Confirm Password</label>
          <input
            type="Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            className="bg-gray-200 px-2 w-full p-3 rounded  "
          />
          {error.confirmPassword && (
            <div className="error text-red-500">{error.confirmPassword}</div>
          )}
          <div className="relative top-12">
            {/* please note both icons are merged together incase of writing the code for functionality */}
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-4 bottom-14 cursor-pointer "
            />
          </div>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="bg-black w-full text-white text-sm p-3 rounded "
          >
            Create my account
          </button>
        </div>
        <p className="pt-8 text-sm pb-8 flex justify-center">
          Already have an account? <a href="#">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
