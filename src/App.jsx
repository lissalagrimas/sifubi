import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}