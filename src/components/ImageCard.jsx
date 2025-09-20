import { FaArrowDown, FaHeart, FaPlus } from "react-icons/fa";

function ImageCard({ image }) {
  return (
    <div className="relative group w-full overflow-hidden rounded-lg shadow-md">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-auto object-cover transition duration-300 hover:brightness-75"
      />

      <div className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <button className="btn btn-active text-[16px]">
            <FaHeart />
          </button>
          <button className="btn btn-active text-[16px]">
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="btn btn-active text-[16px]">
          <FaArrowDown />
        </button>
      </div>

      <div className="absolute bottom-2 left-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="avatar flex items-center gap-2">
          <div className="w-8 rounded-full overflow-hidden">
            <img
              src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
              alt="user"
            />
          </div>
          <p className="text-lg font-bold">Elena Sizontseva</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
