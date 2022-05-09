import SnapL from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-close-menu.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import TodoIcon from "../images/icon-todo.svg";
import CalendarIcon from "../images/icon-calendar.svg";
import ReminderIcon from "../images/icon-reminders.svg";
import Planicon from "../images/icon-planning.svg";

const Navbar = () => {
    const change = () => {
        const navTog = document.getElementsByClassName("toggle");

        for (let i = 0; i < navTog.length; i++) {
            navTog[i].classList.toggle("hidden");
        }
    };

    const showDrop1 = () => {
        const d1 = document.getElementsByClassName("drop1");
        const up = document.getElementsByClassName("up");
        const down = document.getElementsByClassName("down");

        if (d1[0].classList.contains("hidden")) {
            d1[0].classList.remove("hidden");
        } else {
            d1[0].classList.add("hidden");
        }

        if (up[0].classList.contains("hidden")) {
            up[0].classList.remove("hidden");
            down[0].classList.add("hidden");
        } else {
            up[0].classList.add("hidden");
            down[0].classList.remove("hidden");
        }
    };

    const showDrop2 = () => {
        const d2 = document.getElementsByClassName("drop2");
        const up = document.getElementsByClassName("up2");
        const down = document.getElementsByClassName("down2");

        if (d2[0].classList.contains("hidden")) {
            d2[0].classList.remove("hidden");
        } else {
            d2[0].classList.add("hidden");
        }

        if (up[0].classList.contains("hidden")) {
            up[0].classList.remove("hidden");
            down[0].classList.add("hidden");
        } else {
            up[0].classList.add("hidden");
            down[0].classList.remove("hidden");
        }
    };

    return (
        <nav className="flex flex-wrap items-center justify-between space-x-8 px-4 py-4 md:flex-row md:flex-nowrap md:px-8 md:py-8">
            <img src={SnapL} alt="Snap Logo" />

            <button onClick={change} className="md:hidden">
                <img className="toggle" src={Menu} alt="" />
            </button>

            <div className="toggle absolute top-0 right-0 hidden h-screen w-[60%] flex-col space-y-5 bg-white px-4 py-4 md:relative md:flex md:h-0 md:w-full md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 md:bg-transparent md:px-0 md:py-0">
                <button
                    onClick={change}
                    className="flex w-full justify-end md:hidden"
                >
                    <img src={menuClose} alt="" />
                </button>
                <ul className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-8">
                    <div className="flex flex-col">
                        <li
                            onClick={showDrop1}
                            className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
                        >
                            <span className="mr-4 text-lg md:mr-2">
                                Features
                            </span>
                            <img
                                className="down h-min w-min fill-[#141414] default:block"
                                src={ArrowDown}
                                alt=""
                            />
                            <img
                                className="up hidden h-min w-min"
                                src={ArrowUp}
                                alt=""
                            />
                        </li>
                        <ul
                            onMouseLeave={showDrop1}
                            className="drop1 md:shadowCustom hidden h-max w-max space-y-3 rounded-lg bg-white py-2 px-4 text-center md:absolute md:-left-16 md:mt-8 md:py-4 md:px-8"
                        >
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={TodoIcon}
                                    alt=""
                                />
                                <p className="text-lg md:text-base">
                                    Todo List
                                </p>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={CalendarIcon}
                                    alt=""
                                />
                                <span className="text-lg md:text-base">
                                    Calendar
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={ReminderIcon}
                                    alt=""
                                />
                                <span className="text-lg md:text-base">
                                    Reminder
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={Planicon}
                                    alt=""
                                />
                                <span className="text-lg md:text-base">
                                    Planning
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <li
                            onClick={showDrop2}
                            className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
                        >
                            <span className="mr-4 text-lg md:mr-2">
                                Company
                            </span>
                            <img
                                className="down2 h-min w-min fill-[#141414] default:block"
                                src={ArrowDown}
                                alt=""
                            />
                            <img
                                className="up2 hidden h-min w-min"
                                src={ArrowUp}
                                alt=""
                            />
                        </li>
                        <ul
                            onMouseLeave={showDrop2}
                            className="drop2 md:shadowCustom hidden h-max w-max space-y-3 rounded-lg bg-white py-2 px-4 md:absolute md:mt-8 md:py-4 md:px-8"
                        >
                            <li className="cursor-pointer text-[#696969]">
                                <span className="text-lg md:text-base">
                                    History
                                </span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span className="text-lg md:text-base">
                                    Our Team
                                </span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span className="text-lg md:text-base">
                                    Blog
                                </span>
                            </li>
                        </ul>
                    </div>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        Careers
                    </li>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        About
                    </li>
                </ul>
                <div className="mx-auto flex w-[90%] flex-col items-center space-y-4 md:w-auto md:flex-row md:space-y-0">
                    <p className="cursor-pointer text-[#696969] hover:text-[#141414] md:mr-8">
                        Login
                    </p>
                    <p className="mx-auto w-[90%] cursor-pointer rounded-2xl border-2 border-[#696969] py-2 px-4 text-center text-[#696969] hover:border-[#141414] hover:text-[#141414]">
                        Register
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
