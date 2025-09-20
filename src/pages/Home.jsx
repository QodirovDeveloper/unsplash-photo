import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";
import { useOutletContext } from "react-router-dom";

const ACCESS_KEY = "Wz6wMjicBiLYuxxdeDfDDvHsJ38t6OmodC8BYcyvlWk";

function Home()
{
  const { searchQuery } = useOutletContext();
  const [images, setImages] = useState([]);

  useEffect(() =>
  {
    if (searchQuery)
    {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}`
        )
        .then((res) => setImages(res.data.results))
        .catch((err) => console.error(err));
    }
  }, [searchQuery]);

  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      {images.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((img, index) => (
            <div key={`{img.id}-${index}`} className="mb-4 break-inside-avoid">
              <ImageCard image={img} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Search for images above</p>
      )}
    </div>
  );
}

export default Home;




// import { Fragment } from "react";
// import { useCollection } from "../hooks/useCollection";
// // import Images from "../components/Images";

// function Home()
// {
//   const { data: users } = useCollection("users");
//   if (!users)
//   {
//     return <h1 className="text-3xl">Loading...</h1>;
//   }
//   return (
//     <>
//       <div>
//         {users &&
//           users.map((user) =>
//           {
//             return (
//               <Fragment key={user.id}>
//                 {user.online && (
//                   <div className="avatar avatar-online">
//                     <div className="w-10 rounded-full">
//                       <img src={user?.photoURL} alt="user name" />
//                     </div>
//                   </div>
//                 )}
//                 {!user.online && (
//                   <div className="avatar avatar-offline">
//                     <div className="w-10 rounded-full">
//                       <img src={user?.photoURL} alt="user name" />
//                     </div>
//                   </div>
//                 )}
//               </Fragment>
//             );
//           })}
//       </div>
//       {/* <Images /> */}
//     </>
//   );
// }

// export default Home;
