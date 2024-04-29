// // Navbar.js

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/slices/authSlice';

// const Navbar = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav>
//       {isAuthenticated ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <div>Not logged in</div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
