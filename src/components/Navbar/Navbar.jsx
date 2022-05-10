import SnapL from "../../images/icons/logo.svg";
import Menu from "../../images/icons/icon-menu.svg";
import menuClose from "../../images/icons/icon-close-menu.svg";

import { lazy, Suspense } from "react";

const NavComponent1 = lazy(() => import("./DropNav1.jsx"));
const NavComponent2 = lazy(() => import("./DropNav2.jsx"));

const Navbar = () => {
    const change = () => {
        const navTog = document.getElementsByClassName("toggle");

        for (let i = 0; i < navTog.length; i++) {
            navTog[i].classList.toggle("hidden");
        }
    };

    return (
        <nav className="flex flex-wrap items-center justify-between space-x-8 px-4 py-4 md:flex-row md:flex-nowrap md:px-8 md:py-8">
            <img src={SnapL} className="h-min w-min" alt="Snap Logo" />

            <button
                aria-label="open menu"
                onClick={change}
                className="md:hidden"
            >
                <img
                    loading="eager"
                    className="toggle h-min w-min"
                    src={Menu}
                    alt=""
                />
            </button>

            <div className="toggle absolute top-0 right-0 hidden h-screen w-[60%] flex-col space-y-5 bg-white px-4 py-4 md:relative md:flex md:h-0 md:w-full md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 md:bg-transparent md:px-0 md:py-0">
                <button
                    aria-label="close menu"
                    onClick={change}
                    className="flex w-full justify-end md:hidden"
                >
                    <img
                        src={menuClose}
                        loading="lazy"
                        className="h-min w-min"
                        alt=""
                    />
                </button>
                <ul className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-8">
                    <Suspense fallback={<div>.....loading</div>}>
                        <NavComponent1 />
                    </Suspense>
                    <Suspense fallback={<div>.....loading</div>}>
                        <NavComponent2 />
                    </Suspense>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        Careers
                    </li>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        About
                    </li>
                </ul>
                <div className="mx-auto flex w-[90%] flex-col items-center space-y-4 md:w-auto md:flex-row md:space-y-0">
                    <button className="cursor-pointer text-[#696969] hover:text-[#141414] md:mr-8">
                        Login
                    </button>
                    <button className="mx-auto w-[90%] cursor-pointer rounded-2xl border-2 border-[#696969] py-2 px-4 text-center text-[#696969] hover:border-[#141414] hover:text-[#141414]">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
