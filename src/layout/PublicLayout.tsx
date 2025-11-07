import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <div>
            <Disclaimer />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout