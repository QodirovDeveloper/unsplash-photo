import React, { useState } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import { motion } from "framer-motion"; 

export default function ImageUploadModal({
  preview,
  url,
  setUrl,
  handleFileChange,
  editId,
  addImage,
  updateImage,
  isLoading,
}) {
  return (
    <>
      <motion.button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={preview || "/empty.avif"}
          alt="Upload"
          className="w-40 object-cover border-2 border-dashed border-gray-300 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>

      <dialog id="my_modal_2" className="modal">
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex max-sm:flex-col justify-center items-center gap-4">
            <label className="cursor-pointer inline-block">
              <motion.img
                src={preview || "/empty.avif"}
                alt="Upload"
                className="w-40 object-cover rounded border-2 border-dashed border-gray-300"
                whileHover={{ scale: 1.05 }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                disabled={isLoading}
              />
            </label>

            <div className="text-4xl sm:flex hidden">
              <TbArrowsLeftRight />
            </div>
            <div className="text-4xl sm:hidden flex">
              <LuArrowDownUp />
            </div>

            <motion.input
              type="text"
              placeholder="Image URL (optional)"
              className="border p-2 rounded"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {preview && (
            <motion.p
              className="text-sm text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Rasm tanlandi ✅
            </motion.p>
          )}

          {editId ? (
            <motion.button
              onClick={updateImage}
              className="bg-blue-500 text-white w-full m-1 py-2 rounded"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? "Loading..." : "Update"}
            </motion.button>
          ) : (
            <motion.button
              onClick={addImage}
              className="bg-green-500 text-white w-full m-1 py-2 rounded"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? "Loading..." : "Add"}
            </motion.button>
          )}
        </motion.div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
