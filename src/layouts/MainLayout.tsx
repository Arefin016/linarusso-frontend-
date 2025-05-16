import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;