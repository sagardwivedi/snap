import ArrowUp from "../../images/icons/icon-arrow-up.svg";
import ArrowDown from "../../images/icons/icon-arrow-down.svg";

const showDrop2 = () => {
    const d2 = document.querySelector(".drop2");
    const up = document.querySelector(".up2");
    const down = document.querySelector(".down2");

    d2.classList.toggle("hidden");
    up.classList.toggle("hidden");
    down.classList.toggle("hidden");
};

const DropNav2 = () => {
    return (
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
                <img className="up2 hidden h-min w-min" src={ArrowUp} alt="" />
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
    );
};

export default DropNav2;
