import { Outlet } from "react-router";
import Header from "../Pages/Shered/Header";
import Footer from "../Pages/Shered/Footer";



const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;