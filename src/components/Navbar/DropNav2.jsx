import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DropNav2 = () => {
    return (
        <Menu as="div" className="relative inline-block">
            <Menu.Button className="inline-flex text-[#696969]">
                Company
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
                <Menu.Items className="flex w-max flex-col space-y-2 bg-white px-6 py-3 text-[#696969] md:absolute md:mt-2 md:rounded-lg md:drop-shadow-md">
                    <Menu.Item>
                        <a href="/todo" className="inline-flex items-center">
                            History
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/calendar" className="inline-flex">
                            Our Team
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/reminder" className="inline-flex">
                            Blog
                        </a>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DropNav2;
