import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";

const Header = () => {
    return (
        <div className="shadow-md bg-white sticky top-0 dark:bg-gray-900">
            <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
                <div className="flex">
                    <MenuItems
                        title="Home"
                        address="/"
                        Icon={AiFillHome}
                        className="hover:bg-blue-500"
                    />
                    <MenuItems
                        title="ABOUT"
                        address="/about"
                        Icon={BsFillInfoCircleFill}
                    />

                    <NavbarItem
                        title="Trending"
                        address="/trending"
                        param="fetchTrending"
                    />
                    <NavbarItem
                        title="TopRated"
                        address="/topraeted"
                        param="fetchTopRated"
                    />
                </div>
                <div className="flex items-center space-x-5">
                    <SearchBox />
                    <DarkModeSwitch />
                    <Link href="/">
                        <h2 className="text-2xl">
                            <span className="font-bold bg-amber-600 py-1 px-2 rounded-lg mr-1 text-white">
                                IMDB
                            </span>
                            <span className="text-xl hidden sm:inline">
                                Clone_
                            </span>
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
