import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CommentsList from "../components/CommentsList";
import { TbArrowsLeftRight } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import ImageUploadModal from "../components/ImageUploadModal";

const API_URL = "https://68cc1c72716562cf50767703.mockapi.io/unsplash";
const imgbbAPI =
  "https://api.imgbb.com/1/upload?key=91348b1129cafa9ecbee0a80c6df8058";

export default function AddImage() {
  const { user } = useSelector((state) => state.user);
  const [images, setImages] = useState([]);
  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setFile(selected); // Fayl serverga yuborish uchun
      setPreview(URL.createObjectURL(selected)); // Faylni sahifada ko‘rsatish uchun
    }
  };

  // GET
  const fetchImages = async () => {
    const res = await axios.get(API_URL);
    setImages(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // UPLOAD TO IMGBB
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post(imgbbAPI, formData);
    return res.data.data.url;
  };

  // CREATE IMAGE
  const addImage = async () => {
    if (!url && !file) return alert("Rasm URL yoki fayl tanlang!");
    setIsLoading(true);
    let finalUrl = url;
    try {
      if (file) {
        finalUrl = await uploadImage(file); // imgbb ga yuklash
      }

      await axios.post(API_URL, {
        url: finalUrl,
        comments: [],
        user: {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        },
      });

      setUrl("");
      setFile(null);
      setPreview(null);
      document.getElementById("my_modal_2")?.close();
      fetchImages();
    } catch (error) {
      alert("Rasm qo‘shishda xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  // DELETE IMAGE
  const deleteImage = async (id) => {
    try {
      setLoadingId(id);
      await axios.delete(`${API_URL}/${id}`);
      await fetchImages();
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setLoadingId(null);
    }
  };

  // UPDATE IMAGE
  const updateImage = async () => {
    setIsLoading(true);
    try {
      let finalUrl = url;

      if (file) {
        finalUrl = await uploadImage(file);
      }

      await axios.put(`${API_URL}/${editId}`, {
        url: finalUrl,
        user: {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        },
      });

      setEditId(null);
      setUrl("");
      setFile(null);
      setPreview(null);
      fetchImages();
      document.getElementById("my_modal_2")?.close();

      await fetchImages();
    } catch (error) {
      alert("Rasm yangilashda xatolik yuz berdi");
    } finally {
      setIsLoading(false);
    }
  };

  // ADD COMMENT
  const addComment = async (id, text) => {
    if (!text) return;
    const img = images.find((i) => i.id === id);
    const newComment = {
      id: Date.now(),
      text,
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      },
    };
    const updated = {
      ...img,
      comments: [...(img.comments || []), newComment],
    };
    await axios.put(`${API_URL}/${id}`, updated);
    fetchImages();
  };

  // DELETE COMMENT
  const deleteComment = async (imgId, commentId) => {
    const img = images.find((i) => i.id === imgId);
    const updated = {
      ...img,
      comments: img.comments.filter((c) => c.id !== commentId),
    };
    await axios.put(`${API_URL}/${imgId}`, updated);
    fetchImages();
  };

  // UPDATE COMMENT
  const updateComment = async (imgId, commentId, newText) => {
    const img = images.find((i) => i.id === imgId);
    const updatedComments = img.comments.map((c) =>
      c.id === commentId ? { ...c, text: newText } : c
    );
    const updated = { ...img, comments: updatedComments };
    await axios.put(`${API_URL}/${imgId}`, updated);
    fetchImages();
  };

  return (
    <>
      <div className="min-[973px]:pt-32 min-[973px]:pl-20 max-[973px]:pt-48 px-2">
        {/* Add / Update image */}
        <div className="flex items-center justify-center m-2">
          <ImageUploadModal
            preview={preview}
            url={url}
            setUrl={setUrl}
            handleFileChange={handleFileChange}
            editId={editId}
            addImage={addImage}
            updateImage={updateImage}
            isLoading={isLoading}
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((item) => (
            <div key={item.id} className="h-auto">
              <div className=" group w-full overflow-hidden shadow-md">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.url}
                    alt="unsplash"
                    className="select-none w-full h-auto object-cover transition duration-300 hover:brightness-75"
                  />
                  {/* Dropdown (bottom-left inside hover) */}
                  <div className="absolute bottom-2 left-2 opacity-100 sm:opacity-0 max-sm:bg-black/20 rounded-full sm:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1">
                      <div className="dropdown dropdown-right dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="cursor-pointer m-1 p-1 text-white"
                        >
                          <BiDotsVerticalRounded size={25} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu z-1">
                          <div className="space-y-1 select-none">
                            <div
                              onClick={() => {
                                setEditId(item.id);
                                setUrl(item.url);
                                document
                                  .getElementById("my_modal_2")
                                  .showModal();
                              }}
                              className="bg-yellow-500 text-white p-1 rounded cursor-pointer flex items-center"
                            >
                              <MdOutlineEdit />
                              <span>Edit</span>
                            </div>
                            <div
                              onClick={() => deleteImage(item.id)}
                              className="bg-red-500 text-white p-1 rounded cursor-pointer flex items-center"
                            >
                              {loadingId === item.id ? (
                                <span className="loading loading-spinner"></span>
                              ) : (
                                <>
                                  <MdDelete />
                                  <span> Delete</span>
                                </>
                              )}
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 p-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 max-sm:bg-black/20 rounded-full transition-opacity duration-300">
                    <div className="avatar flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={item.user?.photoURL}
                          alt={item.user?.displayName || "User"}
                        />
                      </div>
                      <p className="text-sm font-bold text-white">
                        {item.user?.displayName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  {/* Comments */}
                  <CommentsList
                    comments={item.comments || []}
                    imgId={item.id}
                    onDelete={deleteComment}
                    onUpdate={updateComment}
                    onAdd={addComment}
                    currentUser={user}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
