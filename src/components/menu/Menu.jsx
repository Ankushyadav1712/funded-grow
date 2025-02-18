// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// // const { userName } = useUser();
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const Menu = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   // const[userName,setUserName] = useState(null);
//   const [userEmail, setUserEmail] = useState(null);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);


//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserEmail(user.email); // Set the user's email
//         // setUserName(user.name);
//       } else {
//         setUserEmail(null); // Clear email if user logs out
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleProfileClick = () => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

// const handleMenuToggle = () => {
//   setIsMenuOpen(!isMenuOpen);
// };

//   const menuClass = "menu text-gray-600 hover:text-emerald-500 no-underline";
//   const activeMenuClass = "menu selected text-emerald-500 font-bold no-underline";

//   return (
//     <div className="topbar-container ">
//       <nav className="col-8">
//         <div>
//           <div className="container mx-auto flex justify-between items-center col-12">
//             {/* Logo */}
//             <div className="text-black text-2xl font-bold col-4">
//               Funded{" "}
//               <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
//                 Grow
//               </span>

//             </div>
//             <div className="col-4"></div>

//             {/* Menu items */}
//             <div className="lg:flex space-x-8 col-8  no-underline">
//               <NavLink
//                 to="/summary"
//                 className={({ isActive, isPending }) =>
//                   isPending ? "pending" : isActive ? activeMenuClass : menuClass
//                 }
//               >
//                 Dashboard
//               </NavLink>
//               <NavLink
//                 to="/orders"
//                 className={({ isActive, isPending }) =>
//                   isPending ? "pending" : isActive ? activeMenuClass : menuClass
//                 }
//               >
//                 Orders
//               </NavLink>
//               <NavLink
//                 to="/holding"
//                 className={({ isActive, isPending }) =>
//                   isPending ? "pending" : isActive ? activeMenuClass : menuClass
//                 }
//               >
//                 Holdings
//               </NavLink>
//               <NavLink
//                 to="/positions"
//                 className={({ isActive, isPending }) =>
//                   isPending ? "pending" : isActive ? activeMenuClass : menuClass
//                 }
//               >
//                 Positions
//               </NavLink>
//               <NavLink
//                 to="/funds"
//                 className={({ isActive, isPending }) =>
//                   isPending ? "pending" : isActive ? activeMenuClass : menuClass
//                 }
//               >
//                 Funds
//               </NavLink>
//             </div>

//             {/* Profile */}
//             <div className="lg:flex items-center space-x-4 ">
//               <div className="profile flex items-center mt-4">
//                 <div className="avatar bg-white text-black px-3 py-2 rounded-full mr-2 mt-2 border text-5xl">
//                   F<span className="text-green-500">G</span>
//                 </div>
//                 <p
//                   className="username mt-1 text-9xl border border-black m-2 p-2 rounded bg-green-400 hover:bg-gray-500"
//                   onClick={handleProfileClick}
//                 >
//                   Profile{" "}
//                 </p>
//               </div>
//               {isProfileDropdownOpen && (
//                 <div className="fixed right-4 mt-5 -mb-12 -mr-12 bg-gray-300 border border-black rounded shadow-lg p-4">
//                   <ul className="">
//                     {/* <li>{userName||"Name"}</li> */}
//                     <li className="">{userEmail || "Email"}</li>
//                   </ul>
//                   <div className="mt-4 gap-3">
//                     <div className="col-12 gap-2">
//                       <button onClick={handleProfileClick} className="col-4 ">
//                         Close
//                       </button>
//                       <Link
//                         to=""
//                         className="no-underline text-black border border-black p-2 rounded ml-1 -mr-20"
//                       >
//                         Log Out
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set the user's email
      } else {
        setUserEmail(null); // Clear email if user logs out
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClass = "menu text-gray-600 hover:text-emerald-500 no-underline";
  const activeMenuClass =
    "menu selected text-emerald-500 font-bold no-underline";

  return (
    <div className="topbar-container ">
      <nav className="col-8 flex">
        <div className="container mx-auto flex justify-around items-center col-12 mt-3 ">
          {/* Logo */}
          <div className="text-black text-2xl font-bold col-4">
            Funded{" "}
            <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
              Grow
            </span>
          </div>
          <div className="col-2"></div>

          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center ">
            <button onClick={handleMenuToggle} className="text-2xl">
              &#9776;
            </button>
          </div>

          {/* Menu items */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex space-x-6 no-underline absolute lg:relative  lg:bg-transparent top-16 left-0 right-0 bg-gray-300  lg:top-auto lg:left-auto lg:right-auto lg:space-x-4 p-4 lg:p-0 border lg:border-0 shadow lg:shadow-none z-50`}
          >
            <NavLink
              to="/summary"
              className={({ isActive }) =>
                isActive ? activeMenuClass : menuClass
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? activeMenuClass : menuClass
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </NavLink>
            <NavLink
              to="/holding"
              className={({ isActive }) =>
                isActive ? activeMenuClass : menuClass
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Holdings
            </NavLink>
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? activeMenuClass : menuClass
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Positions
            </NavLink>
            <NavLink
              to="/funds"
              className={({ isActive }) =>
                isActive ? activeMenuClass : menuClass
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Funds
            </NavLink>
          </div>

          {/* Profile */}
          <div className="col-4"></div>
          <div className="lg:flex items-center space-x-4 mt-2">
            <div className="profile flex items-center mt-4">
              <div className="avatar bg-white text-black px-3 py-2 rounded-full mr-2 mt-3 border text-5xl">
                F<span className="text-green-500">G</span>
              </div>
              <p
                className="username mt-1 text-9xl border border-black m-2 p-2 rounded bg-green-400 hover:bg-green-400"
                onClick={handleProfileClick}
              >
                Profile{" "}
              </p>
            </div>
            {isProfileDropdownOpen && (
              <div className="fixed right-4 mt-5 -mb-12 -mr-12 bg-gray-300 border border-black rounded shadow-lg p-4 z-50">
                <ul className="">
                  <li className="">{userEmail || "Email"}</li>
                </ul>
                <div className="mt-4 gap-3">
                  <div className="col-12 gap-2">
                    <button onClick={handleProfileClick} className="col-4">
                      Close
                    </button>
                    <Link
                      to=""
                      className="no-underline text-black border border-black p-2 rounded ml-1 -mr-20"
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
