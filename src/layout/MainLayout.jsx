import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AsideLeft from "../components/AsideLeft";
function MainLayout({ onSearch, searchQuery })
{
  return (
    <>
      <Navbar  onSearch={onSearch}/>
      <AsideLeft />
      <main>
        <Outlet context={{ searchQuery }}  />
      </main>
    </>
  );
}

export default MainLayout;
