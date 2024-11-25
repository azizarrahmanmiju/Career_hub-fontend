import { NavLink } from "react-router-dom";
import "./Header.css"
import Button from "../Button/Button";
const Header = () => {

    const links = <>
        <li><NavLink className={"testclass"} to="/">Statics</NavLink></li>
        <li><NavLink to={"applied"} >Applied job</NavLink></li>
        <li><NavLink to={"Blog"}>Blog</NavLink></li>
    </>
    return (
        <div className="bg-[#cfbffa28]">
            <div className="navbar max-w-[1000px] text-black mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content  bg-white  mt-3 w-52 p-2 shadow">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-black">Career Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <Button>Applying Now</Button>

                </div>
            </div>
        </div>
    );
};

export default Header;