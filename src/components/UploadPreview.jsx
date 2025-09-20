import { useState } from "react";

function UploadPreview()
{
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) =>
  {
    const selected = e.target.files[0];
    if (selected)
    {
      setPreview(URL.createObjectURL(selected));
    }
  };

  return (
    <div className="space-y-4">
      {/* LABEL = bosiladigan rasm */}
      <label className="cursor-pointer inline-block">
        <img
          src={preview || "/empty.avif"} // Tanlanmagan bo‘lsa default rasm
          alt="Upload"
          className="w-40  object-cover rounded border-2 border-dashed border-gray-300"
        />

        {/* Yashirilgan input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Tanlangan rasm bo‘lsa, nomini ko‘rsatish */}
      {preview && <p className="text-sm text-gray-600">Rasm tanlandi ✅</p>}
    </div>
  );
}

export default UploadPreview;
