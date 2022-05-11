import { Menu, Transition } from "@headlessui/react";
import {
    ChevronDownIcon,
    ClipboardListIcon,
    CalendarIcon,
    BellIcon,
    ClockIcon,
} from "@heroicons/react/solid";

const DropNav1 = () => {
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="inline-flex text-[#696969] hover:text-[#141414]">
                Features
                <ChevronDownIcon className="ml-2 h-5 w-5" />
            </Menu.Button>
            <Transition
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Menu.Items className="flex w-max flex-col space-y-2 px-6 py-3 text-[#696969] md:absolute md:-left-16 md:mt-2 md:rounded-lg  md:bg-white md:drop-shadow-md">
                    <Menu.Item>
                        <a
                            href="/todo"
                            className="inline-flex items-center hover:text-[#141414]"
                        >
                            <ClipboardListIcon
                                aria-hidden="true"
                                className="mr-2 h-5 w-5 fill-[#726CEE]"
                            />
                            Todo list
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="/calendar"
                            className="inline-flex items-center hover:text-[#141414]"
                        >
                            <CalendarIcon
                                aria-hidden="true"
                                className="mr-2 h-5 w-5 fill-[#4BB1DA]"
                            />
                            Calendar
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="/reminder"
                            className="inline-flex items-center hover:text-[#141414]"
                        >
                            <BellIcon
                                aria-hidden="true"
                                className="mr-2 h-5 w-5 fill-[#EDD556]"
                            />
                            Reminder
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="/planning"
                            className="inline-flex items-center hover:text-[#141414]"
                        >
                            <ClockIcon
                                aria-hidden="true"
                                className="mr-2 h-5 w-5 fill-[#8E4CB6]"
                            />
                            Planning
                        </a>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropNav1;
