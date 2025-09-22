import { motion } from "framer-motion";

function DownloadHistory() {
  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sm:text-3xl text-2xl font-medium"
      >
        Download history
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-4 max-w-[418px] text-gray-700"
      >
        You don’t have any downloads associated to your account. <br />
        <span className="text-sm text-gray-500">
          Note: Some activity might take some time to appear.
        </span>
      </motion.p>
    </div>
  );
}

export default DownloadHistory;
