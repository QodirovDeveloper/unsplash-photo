import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GetPlan() {
  const [plan, setPlan] = useState("yearly");

  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-3xl font-bold mb-2 text-base-content">
            One simple plan unlocks everything.
          </h1>
          <p className="text-base-content/70 font-medium mb-6">
            No bundles. No add-ons.
          </p>
        </motion.div>

        {/* Toggle buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex space-x-2 bg-base-300 rounded-full p-1 mb-6"
        >
          <button
            onClick={() => setPlan("yearly")}
            className={`btn btn-sm rounded-full transition ${
              plan === "yearly" ? "btn-primary" : "btn-ghost"
            }`}
          >
            Yearly (66% off)
          </button>
          <button
            onClick={() => setPlan("monthly")}
            className={`btn btn-sm rounded-full transition ${
              plan === "monthly" ? "btn-primary" : "btn-ghost"
            }`}
          >
            Monthly
          </button>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-base-100 rounded-2xl shadow-lg max-w-md w-full p-6 sm:p-8 text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="badge badge-success text-sm font-semibold px-3 py-1 rounded-full"
          >
            Limited Launch Special
          </motion.span>

          {/* Price */}
          <div className="mt-4 relative h-32">
            <AnimatePresence mode="wait">
              {plan === "yearly" ? (
                <motion.div
                  key="yearly"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="line-through text-lg text-base-content/50">$12</div>
                  <div className="text-4xl font-bold text-base-content">
                    $4{" "}
                    <span className="text-base text-base-content/70 font-normal">
                      USD / mo
                    </span>
                  </div>
                  <div className="line-through mt-1 text-base-content/50">$144</div>
                  <div className="font-medium text-base-content">$48 billed yearly</div>
                </motion.div>
              ) : (
                <motion.div
                  key="monthly"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="line-through text-lg text-base-content/50">$12</div>
                  <div className="text-4xl font-bold text-base-content">
                    $12{" "}
                    <span className="text-base text-base-content/70 font-normal">
                      USD / mo
                    </span>
                  </div>
                  <div className="line-through mt-1 text-base-content/50">$144</div>
                  <div className="font-medium text-base-content">$12 billed monthly</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Features */}
          <ul className="text-left mt-6 space-y-3 text-base-content">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Members-only content added monthly
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Unlimited royalty-free downloads
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Image cropping & background removal{" "}
              <span className="ml-1 text-xs text-info bg-info/20 px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Enhanced legal protections
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Ad-free experience
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-primary">+</span> Priority support
            </li>
          </ul>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="btn btn-primary mt-6 w-full font-medium"
          >
            Get Unsplash+
          </motion.button>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center text-sm text-base-content/60 mt-4 space-x-4"
          >
            <span>✔ Renews automatically</span>
            <span>✔ Cancel anytime</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default GetPlan;
