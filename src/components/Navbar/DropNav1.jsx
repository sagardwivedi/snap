import { Menu } from "@headlessui/react";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    ClipboardListIcon,
    CalendarIcon,
    BellIcon,
    ClockIcon,
} from "@heroicons/react/solid";

const DropNav1 = () => {
    return (
        <>
            <Menu as="div" className="relative inline-block">
                {({ active }) => (
                    <>
                        <Menu.Button className="inline-flex text-[#696969]">
                            Features
                            {active ? (
                                <ChevronUpIcon className="ml-2 h-5 w-5" />
                            ) : (
                                <ChevronDownIcon className="ml-2 h-5 w-5" />
                            )}
                        </Menu.Button>
                        <Menu.Items className="flex w-max flex-col space-y-2 bg-white px-6 py-3 text-[#696969] md:absolute  md:rounded-lg md:shadow-lg">
                            <Menu.Item>
                                <a
                                    href="/todo"
                                    className="inline-flex items-center"
                                >
                                    <ClipboardListIcon
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 fill-[#726CEE]"
                                    />
                                    Todo list
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/calendar" className="inline-flex">
                                    <CalendarIcon
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 fill-[#4BB1DA]"
                                    />
                                    Calendar
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/reminder" className="inline-flex">
                                    <BellIcon
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 fill-[#EDD556]"
                                    />
                                    Reminder
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/planning" className="inline-flex">
                                    <ClockIcon
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 fill-[#8E4CB6]"
                                    />
                                    Planning
                                </a>
                            </Menu.Item>
                        </Menu.Items>
                    </>
                )}
            </Menu>
        </>
    );
};

export default DropNav1;
