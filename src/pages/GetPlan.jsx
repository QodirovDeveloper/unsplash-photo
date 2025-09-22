"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GetPlan() {
  const [plan, setPlan] = useState("yearly");

  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            One simple plan unlocks everything.
          </h1>
          <p className="text-gray-700 font-medium mb-6">
            No bundles. No add-ons.
          </p>
        </motion.div>

        {/* Toggle buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex space-x-2 bg-gray-200 rounded-full p-1 mb-6"
        >
          <button
            onClick={() => setPlan("yearly")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${
              plan === "yearly"
                ? "bg-white shadow text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Yearly (66% off)
          </button>
          <button
            onClick={() => setPlan("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${
              plan === "monthly"
                ? "bg-white shadow text-black"
                : "text-gray-600 hover:text-black"
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
          className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 sm:p-8 text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full"
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
                  <div className="text-gray-400 line-through text-lg">$12</div>
                  <div className="text-4xl font-bold text-gray-900">
                    $4{" "}
                    <span className="text-base text-gray-600 font-normal">
                      USD / mo
                    </span>
                  </div>
                  <div className="text-gray-400 mt-1 line-through">$144</div>
                  <div className="text-gray-800 font-medium">
                    $48 billed yearly
                  </div>
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
                  <div className="text-gray-400 line-through text-lg">$12</div>
                  <div className="text-4xl font-bold text-gray-900">
                    $12{" "}
                    <span className="text-base text-gray-600 font-normal">
                      USD / mo
                    </span>
                  </div>
                  <div className="text-gray-400 mt-1 line-through">$144</div>
                  <div className="text-gray-800 font-medium">
                    $12 billed monthly
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Features */}
          <ul className="text-left mt-6 space-y-3">
            <li className="flex items-start">
              <span className="mr-2">+</span> Members-only content added monthly
            </li>
            <li className="flex items-start">
              <span className="mr-2">+</span> Unlimited royalty-free downloads
            </li>
            <li className="flex items-start">
              <span className="mr-2">+</span> Image cropping & background
              removal{" "}
              <span className="ml-1 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">+</span> Enhanced legal protections
            </li>
            <li className="flex items-start">
              <span className="mr-2">+</span> Ad-free experience
            </li>
            <li className="flex items-start">
              <span className="mr-2">+</span> Priority support
            </li>
          </ul>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Unsplash+
          </motion.button>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center text-sm text-gray-500 mt-4 space-x-4"
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
