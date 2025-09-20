// import { useSelector } from "react-redux";
// import { useLogout } from "../hooks/useLogout";

// function Navbar() {
//   const { isPending, logout } = useLogout();
//   const { user } = useSelector((state) => state.user);

//   return (
//     <nav className="flex justify-around items-center mt-22 px-22 py-3 bg-gray-900 text-white">


//       <div className="flex items-center gap-4">
//          {user?.displayName}
//         <img src={user?.photoURL} alt="user name" width={60} className="rounded-full" />


//         {!isPending && (
//           <button onClick={logout} className="btn btn-ghost">
//             Logout
//           </button>
//         )}
//         {isPending && (
//           <button className="btn btn-ghost disabled" disabled>
//             Logout
//           </button>
//         )}


//       </div>
//     </nav>
//   );
// }

// export default Navbar;
