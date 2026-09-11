import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

export default function RootLayout() {
  return (
    <div className="w-full">
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
