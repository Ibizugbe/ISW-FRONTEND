import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
    {/* this is the header section of the project without any functionality, styled using tailwindcss and used fontawesome for the icons */}
      <nav className="flex justify-end bg-white-900 p-4 shadow-lg border-b border-black-500 relative">
        <ul className="flex space-x-4">
          <li className="shadow-lg">
            <a href="#" className="icon p-1 rounded-lg border ">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li className="shadow-lg">
            <a href="#" className="icon p-1 rounded-lg border">
              <FontAwesomeIcon icon={faShoppingCart} />
          
            </a>
          </li>
        </ul>
        <span className="absolute bottom-7"><FontAwesomeIcon icon={faCircle} /></span>
      </nav>
      </div>
  );
};

export default Navbar;
