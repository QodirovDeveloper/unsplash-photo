import { useState } from "react";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CommentsList({
  comments,
  imgId,
  onDelete,
  onUpdate,
  onAdd,
  currentUser,
})
{
  const [newComment, setNewComment] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [sending, setSending] = useState(false);
  const [savingId, setSavingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      {/* Add new comment input */}
      <div className="flex gap-2 mt-3 select-none">
        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="border p-1 flex-1 rounded"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={sending}
        />
        <button
          onClick={async () =>
          {
            if (!newComment.trim()) return;
            setSending(true);
            await onAdd(imgId, newComment);
            setNewComment("");
            setSending(false);
          }}
          className="btn btn-info flex items-center gap-2"
          disabled={sending}
        >
          {sending ? <FaSpinner className="animate-spin" /> : "Send"}
        </button>
      </div>

      <h2 className="font-semibold mt-4">Comments:</h2>
      {comments.length > 0 ? (
        <ul className="list-disc list-inside">
          {comments.map((c) => (
            <li
              key={c.id}
              className="flex justify-between items-start gap-2 mb-2"
            >
              <div className="flex gap-2 items-center flex-1">
                <img
                  src={c.user?.photoURL}
                  alt={c.user?.displayName}
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{c.user?.displayName}</p>
                  {editId === c.id ? (
                    <input
                      className="border p-1 rounded w-full"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      disabled={savingId === c.id}
                    />
                  ) : (
                    <p className="text-sm">{c.text}</p>
                  )}
                </div>
              </div>

              {/* Actions */}
              {currentUser?.uid === c.user?.uid && (
                <div className="flex gap-3 mt-1">
                  {editId === c.id ? (
                    <button
                      onClick={async () =>
                      {
                        setSavingId(c.id);
                        await onUpdate(imgId, c.id, editText);
                        setEditId(null);
                        setSavingId(null);
                      }}
                      className="text-green-500 text-md flex items-center gap-1"
                      disabled={savingId === c.id}
                    >
                      {savingId === c.id ? (
                        <FaSpinner className="animate-spin text-green-500" />
                      ) : (
                        "Save"
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                      {
                        setEditId(c.id);
                        setEditText(c.text);
                      }}
                      className="text-yellow-500 text-md cursor-pointer flex items-center"
                      disabled={savingId === c.id || deletingId === c.id}
                    >
                      <MdOutlineEdit />
                    </button>
                  )}
                  <button
                    onClick={async () =>
                    {
                      setDeletingId(c.id);
                      await onDelete(imgId, c.id);
                      setDeletingId(null);
                    }}
                    className="text-red-500 text-md flex items-center"
                    disabled={deletingId === c.id || savingId === c.id}
                  >
                    {deletingId === c.id ? (
                      <FaSpinner className="animate-spin text-red-500" />
                    ) : (
                      <MdDelete />
                    )}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-2">No comments yet...</p>
      )}
    </div>
  );
}




// import { useState } from "react";
// import { MdDelete, MdOutlineEdit } from "react-icons/md";
// import { useSelector } from "react-redux";

// export default function CommentsList({ comments, imgId, onDelete, onUpdate, onAdd, currentUser }) {
//   const [newComment, setNewComment] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");
//   const { user } = useSelector((state) => state.user);

//   return (
//     <div>
//       {/* Add new comment input */}
//       <div className="flex gap-2 mt-3 select-none">
//         <img
//           src={user?.photoURL}
//           alt={user?.displayName}
//           className="w-8 h-8 rounded-full"
//         />
//         <input
//           type="text"
//           placeholder="Write a comment..."
//           className="border p-1 flex-1 rounded"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             onAdd(imgId, newComment);
//             setNewComment("");
//           }}
//           className="btn btn-info"
//         >
//           Send
//         </button>
//       </div>

//       <h2 className="font-semibold">Comments:</h2>
//       {comments.length > 0 ? (
//         <ul className="list-disc list-inside">
//           {comments.map((c) => (
//             <li
//               key={c.id}
//               className="flex justify-between items-start gap-2 mb-2"
//             >
//               <div className="flex gap-2 items-center flex-1">
//                 <img
//                   src={c.user?.photoURL}
//                   alt={c.user?.displayName}
//                   className="w-6 h-6 rounded-full"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold">{c.user?.displayName}</p>
//                   {editId === c.id ? (
//                     <input
//                       className="border p-1 rounded w-full"
//                       value={editText}
//                       onChange={(e) => setEditText(e.target.value)}
//                     />
//                   ) : (
//                     <p className="text-sm">{c.text}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Actions */}
//               {currentUser?.uid === c.user?.uid && (
//                 <div className="flex gap-3 mt-1">
//                   {editId === c.id ? (
//                     <button
//                       onClick={() => {
//                         onUpdate(imgId, c.id, editText);
//                         setEditId(null);
//                       }}
//                       className="text-green-500 text-md"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => {
//                         setEditId(c.id);
//                         setEditText(c.text);
//                       }}
//                       className="text-yellow-500 text-md cursor-pointer"
//                     >
//                       <MdOutlineEdit />
//                     </button>
//                   )}
//                   <button
//                     onClick={() => onDelete(imgId, c.id)}
//                     className="text-red-500 text-md"
//                   >
//                     <MdDelete />
//                   </button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No comments yet...</p>
//       )}
//     </div>
//   );
// }
