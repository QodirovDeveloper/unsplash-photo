import React, { useState } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";

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
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        <img
          src={preview || "/empty.avif"}
          alt="Upload"
          className="w-40 object-cover border-2 border-dashed border-gray-300 cursor-pointer"
        />
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="flex max-sm:flex-col justify-center items-center gap-4">
            <label className="cursor-pointer inline-block">
              <img
                src={preview || "/empty.avif"}
                alt="Upload"
                className="w-40 object-cover rounded border-2 border-dashed border-gray-300"
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

            <input
              type="text"
              placeholder="Image URL (optional)"
              className="border p-2 rounded"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {preview && (
            <p className="text-sm text-gray-600 mt-2">Rasm tanlandi ✅</p>
          )}

          {editId ? (
            <button
              onClick={updateImage}
              className="bg-blue-500 text-white w-full m-1 py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Update"}
            </button>
          ) : (
            <button
              onClick={addImage}
              className="bg-green-500 text-white w-full m-1 py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Add"}
            </button>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
