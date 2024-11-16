import { Outlet } from "react-router-dom";
import Footer from "../compoment/footer/footer";
import Header from "../compoment/Header/Header";
import "./root.css"

const Root = () => {
    return (
        <div className="root bg-white">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;