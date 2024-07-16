import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import EditCardModal from "../../components/EditCardModal";
import TabBar from "../../components/TabBar";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="w-full h-[calc(100vh-100px)] md:h-[calc(100vh-128px)] bg-black/90 py-10 px-4 md:px-0 md:py-0 overflow-y-auto">
        <Outlet />
        <Footer />
      </main>
      <EditCardModal />
      <TabBar />
      <ToastContainer />
    </>
  );
}
