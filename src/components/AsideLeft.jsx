import { FaRegFileAlt, FaRegUserCircle } from "react-icons/fa";
import { GoBell, GoDownload } from "react-icons/go";
import { LiaPenNibSolid } from "react-icons/lia";
import { LuTabletSmartphone } from "react-icons/lu";
import {
  MdGroups,
  MdOutlineFolderCopy,
  MdOutlineHomeWork,
  MdOutlineImage,
  MdTranslate,
} from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import ThemeMode from "./ThemeMode";
import { SiUnsplash } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { motion } from "framer-motion";

function AsideLeft() {
  const { isPending, logout } = useLogout();
  const { user } = useSelector((state) => state.user);
  const navLinkStyle = ({ isActive }) =>
    `text-2xl ${
      isActive
        ? "btn btn-square border-neutral-500"
        : "btn btn-square border-base-100"
    }`;
  return (
    <>
      <motion.div
        className="max-[973px]:hidden z-999999 bg-base-100 fixed top-0 bottom-0 left-0 py-5 border border-black/20 px-2.5 flex flex-col items-center justify-between"
        initial={{ y: 900, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-5 items-center">
          <Link to="/" className="text-2xl">
            <SiUnsplash />
          </Link>

          <div
            className="tooltip tooltip-right hover:tooltip-open "
            data-tip="Photos"
          >
            <NavLink to="/" className={navLinkStyle}>
              <MdOutlineImage />
            </NavLink>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Illustrations"
          >
            <NavLink to="/illustrations" className={navLinkStyle}>
              <LiaPenNibSolid />
            </NavLink>
          </div>
          <div className="w-7 border my-2 border-black/20"></div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Collections"
          >
            <NavLink to="/collections" className={navLinkStyle}>
              <MdOutlineFolderCopy />
            </NavLink>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Download History"
          >
            <NavLink to="/downloadHistory" className={navLinkStyle}>
              <GoDownload />
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <ThemeMode />
          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }}
                className="tooltip tooltip-right hover:tooltip-open"
                data-tip="Notifications"
              >
                <button className=" text-2xl">
                  <GoBell />
                </button>
              </motion.div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-50 p-2 shadow-2xl border border-black/30"
            >
              <div role="tablist" className="tabs *:m-1 tabs-border">
                <a role="tab">Highlights</a>
                <a role="tab">Activity</a>
                <p className="p-10">
                  Activity associated with your account will appear here.
                </p>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <motion.div whileHover={{ scale: 1.1 }}
                className="tooltip tooltip-right hover:tooltip-open"
                data-tip="Profile"
              >
                <img
                  src={user?.photoURL}
                  alt="user name"
                  width={25}
                  className="rounded-full"
                />
              </motion.div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-[340px]  shadow-2xl border border-black/30"
            >
              <li>
                <div className="card-body items-center  border-b text-center">
                  <p className="text-2xl">
                    <img
                      src={user?.photoURL}
                      alt="user name"
                      width={25}
                      className="rounded-full"
                    />
                  </p>
                  <h1>{user.displayName}</h1>
                  <p>View profile</p>
                </div>
                <a>Stats</a>
                <a>Download history</a>
                <a>Account settings</a>
              </li>
              <NavLink to="/addImage">
                <li>
                  <button className="btn btn-outline m-1">
                    Submit an image
                  </button>
                </li>
              </NavLink>
              <>
                {!isPending && (
                  <li onClick={logout} className="btn btn-ghost">
                    Logout {user?.displayName}
                  </li>
                )}
                {isPending && (
                  <button className="btn btn-ghost disabled" disabled>
                    Logout {user?.displayName}
                  </button>
                )}
              </>
            </ul>
          </div>

          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <motion.div
                whileHover={{ rotate: -90 }}
                className="tooltip tooltip-right hover:tooltip-open"
                data-tip="Menu"
              >
                <SlMenu />
              </motion.div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content text-lg menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-2xl border border-black/30"
            >
              <li>
                <a>
                  <MdOutlineHomeWork /> Company
                </a>
              </li>

              <li>
                <a>
                  <LuTabletSmartphone /> Product
                </a>
              </li>
              <li>
                <a>
                  <MdGroups /> Community
                </a>
              </li>
              <li>
                <a>
                  <FaRegFileAlt /> Legan
                </a>
              </li>
              <li>
                <a>
                  <MdTranslate /> English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AsideLeft;
