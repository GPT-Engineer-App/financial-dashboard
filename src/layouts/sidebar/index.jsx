import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-grow p-6 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Layout;