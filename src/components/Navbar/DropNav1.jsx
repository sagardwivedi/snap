import TodoIcon from "../../images/icons/icon-todo.svg";
import CalendarIcon from "../../images/icons/icon-calendar.svg";
import ReminderIcon from "../../images/icons/icon-reminders.svg";
import Planicon from "../../images/icons/icon-planning.svg";
import ArrowUp from "../../images/icons/icon-arrow-up.svg";
import ArrowDown from "../../images/icons/icon-arrow-down.svg";

const showDrop1 = () => {
    const d1 = document.querySelector(".drop1");
    const up = document.querySelector(".up");
    const down = document.querySelector(".down");

    d1.classList.toggle("hidden");
    up.classList.toggle("hidden");
    down.classList.toggle("hidden");
};

const DropNav1 = () => {
    return (
        <div className="flex flex-col">
            <li
                onClick={showDrop1}
                className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
            >
                <span className="mr-4 text-lg md:mr-2">Features</span>
                <img
                    className="down h-min w-min fill-[#141414] default:block"
                    src={ArrowDown}
                    alt=""
                />
                <img className="up hidden h-min w-min" src={ArrowUp} alt="" />
            </li>
            <ul
                onMouseLeave={showDrop1}
                className="drop1 md:shadowCustom hidden h-max w-max space-y-3 rounded-lg bg-white py-2 px-4 text-center md:absolute md:-left-16 md:mt-8 md:py-4 md:px-8"
            >
                <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                    <img className="h-5 md:h-min" src={TodoIcon} alt="" />
                    <p className="text-base">Todo List</p>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                    <img className="h-5 md:h-min" src={CalendarIcon} alt="" />
                    <span className="text-base">Calendar</span>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                    <img className="h-5 md:h-min" src={ReminderIcon} alt="" />
                    <span className="text-base">Reminder</span>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                    <img className="h-5 md:h-min" src={Planicon} alt="" />
                    <span className="text-base">Planning</span>
                </li>
            </ul>
        </div>
    );
};

export default DropNav1;
