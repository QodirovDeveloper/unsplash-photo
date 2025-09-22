import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Avatar + Info */}
        <div className="flex flex-col items-center text-center">
          <motion.img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-28 h-28 rounded-full object-cover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            className="text-3xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {user?.displayName}
          </motion.h1>

          <motion.p
            className=" mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Download free, beautiful high-quality photos curated by{" "}
            {user?.displayName}.
          </motion.p>

          {/* Hire Status */}
          <motion.p
            className="text-gray-500 mt-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            ❌ Not available for hire{" "}
            <button className="text-blue-600 underline">Update</button>
          </motion.p>

          {/* Edit Profile */}
          <motion.button
            className="btn btn-soft mt-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            Edit profile
          </motion.button>
        </div>

        {/* Tabs */}
        <motion.div
          className="w-full overflow-x-auto whitespace-nowrap border-b mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ul className="inline-flex gap-6 text-sm font-medium ">
            <li className="pb-2 border-b-2 border-black">Photos 0</li>
            <li className="pb-2 hover:border-b-2 hover:border-black cursor-pointer">
              Illustrations 0
            </li>
            <li className="pb-2 hover:border-b-2 hover:border-black cursor-pointer">
              Likes 0
            </li>
            <li className="pb-2 hover:border-b-2 hover:border-black cursor-pointer">
              Collections 1
            </li>
            <li className="pb-2 hover:border-b-2 hover:border-black cursor-pointer">
              Stats
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
