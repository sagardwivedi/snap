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
        const d1 = document.querySelector(".drop1");
        const up = document.querySelector(".up");
        const down = document.querySelector(".down");

        d1.classList.toggle("hidden");
        up.classList.toggle("hidden");
        down.classList.toggle("hidden");
    };

    const showDrop2 = () => {
        const d2 = document.querySelector(".drop2");
        const up = document.querySelector(".up2");
        const down = document.querySelector(".down2");

        d2.classList.toggle("hidden");
        up.classList.toggle("hidden");
        down.classList.toggle("hidden");
    };

    return (
        <nav className="flex flex-wrap items-center justify-between space-x-8 px-4 py-4 md:flex-row md:flex-nowrap md:px-8 md:py-8">
            <img src={SnapL} className="h-min w-min" alt="Snap Logo" />

            <button onClick={change} className="md:hidden">
                <img
                    loading="lazy"
                    className="toggle h-min w-min"
                    src={Menu}
                    alt=""
                />
            </button>

            <div className="toggle absolute top-0 right-0 hidden h-screen w-[60%] flex-col space-y-5 bg-white px-4 py-4 md:relative md:flex md:h-0 md:w-full md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 md:bg-transparent md:px-0 md:py-0">
                <button
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
                                <p className="text-base">Todo List</p>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={CalendarIcon}
                                    alt=""
                                />
                                <span className="text-base">Calendar</span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={ReminderIcon}
                                    alt=""
                                />
                                <span className="text-base">Reminder</span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img
                                    className="h-5 md:h-min"
                                    src={Planicon}
                                    alt=""
                                />
                                <span className="text-base">Planning</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <li
                            onClick={showDrop2}
                            className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
                        >
                            <span className="mr-4 md:mr-2">Company</span>
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
                                <span className="text-base">History</span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span className="text-base">Our Team</span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span className="text-base">Blog</span>
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
