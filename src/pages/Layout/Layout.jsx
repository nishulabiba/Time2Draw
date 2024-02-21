import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const Layout = () => {

   
    return (
        <div >
        <Navbar/>
        <Outlet/>
        <Footer/>
            
        </div>
    );
};

export default Layout;