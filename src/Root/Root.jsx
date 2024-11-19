import { Outlet } from "react-router-dom";
import Footer from "../compoment/footer/footer";
import Header from "../compoment/Header/Header";

const Root = () => {
    return (
        <div className="root bg-white">
            <Header></Header>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;