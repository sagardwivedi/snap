import React, { Fragment, lazy } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import SnapL from "../../images/icons/logo.svg";

const Compo1 = lazy(() => import("./DropNav1"));
const Compo2 = lazy(() => import("./DropNav2"));

const Navbar = () => {
    return (
        <div className="relative">
            <div className="mx-auto w-[95%]">
                <div className="relative">
                    <Menu>
                        <div className="relative py-4">
                            <nav
                                className="relative flex items-center"
                                aria-label="Global"
                            >
                                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                    <div className="flex w-full items-center justify-between md:w-auto">
                                        <a href="/something">
                                            <span className="sr-only">
                                                Snap
                                            </span>
                                            <img
                                                src={SnapL}
                                                alt="Comapany logo"
                                            />
                                        </a>
                                        <div className="flex items-center md:hidden">
                                            <Menu.Button className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">
                                                    Open main menu
                                                </span>
                                                <MenuIcon
                                                    className="h-8 w-8"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden w-full md:ml-10 md:flex md:flex-row md:items-center md:justify-between ">
                                    <div className="flex flex-row items-center space-x-8">
                                        <Compo1 />
                                        <Compo2 />
                                        <a
                                            href="/login"
                                            className="font-medium text-gray-500 hover:text-gray-900"
                                        >
                                            Career
                                        </a>
                                        <a
                                            className="font-medium text-gray-500 hover:text-gray-900"
                                            href="/register"
                                        >
                                            About us
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="/login"
                                            className="mr-4 font-medium text-gray-500 hover:text-gray-900"
                                        >
                                            Login
                                        </a>
                                        <a
                                            className="rounded-xl border-2 border-[#696969] px-4 py-3 font-medium text-gray-500 hover:border-[#141414] hover:text-[#141414]"
                                            href="/register"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="-translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="-translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Menu.Items className="absolute top-0 right-0 w-[60%] md:hidden">
                                <div className="overflow-hidden rounded-l bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                    <div className="flex items-center justify-between px-5 pt-4">
                                        <div>
                                            <img
                                                className="w-auto"
                                                src={SnapL}
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Menu.Button className="inline-flex items-center justify-center rounded-md p-2hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">
                                                    Close main menu
                                                </span>
                                                <XIcon
                                                    className="h-8 w-8"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-2 pt-2 pb-3">
                                        <div className="flex flex-col px-2 pt-2 pb-2 space-y-5">
                                            <Compo1 />
                                            <Compo2 />
                                            <a
                                                href="/login"
                                                className="font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                Career
                                            </a>
                                            <a
                                                className="font-medium text-gray-500 hover:text-gray-900"
                                                href="/register"
                                            >
                                                About us
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center pt-10 space-y-5">
                                            <a
                                                href="/login"
                                                className="mr-4 font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                Login
                                            </a>
                                            <a
                                                className="rounded-xl border-2 border-[#696969] px-4 py-3 w-full text-center font-medium text-gray-500 hover:border-[#141414] hover:text-[#141414]"
                                                href="/register"
                                            >
                                                Register
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
