import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  SingleImage,
  Login,
  Signup,
  Collections,
  DownloadHistory,
  Illustrations,
  GetPlan,
  AddImage,
  ProfilePage,
} from "./pages/index";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import { login, authReady } from "./app/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout searchQuery={searchQuery} onSearch={handleSearch} />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/singleImage/:id", element: <SingleImage /> },
        { path: "/collections", element: <Collections /> },
        { path: "/downloadHistory", element: <DownloadHistory /> },
        { path: "/illustrations", element: <Illustrations /> },
        { path: "/getPlan", element: <GetPlan /> },
        { path: "/addImage", element: <AddImage /> },
        { path: "/profilePage", element: <ProfilePage /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user?.displayName && user?.photoURL) {
      dispatch(login(user));
    }
    dispatch(authReady());
  });

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;