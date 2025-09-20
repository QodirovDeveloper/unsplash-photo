import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (colName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubsctibe = onSnapshot(collection(db, colName), (snapshot) => {
      let data = [];
      snapshot.docs.forEach((user) => {
        data.push({ id: user.id, ...user.data() });
      });
      setData(data);
    });
    return () => unsubsctibe();
  }, []);
  return { data };
};
