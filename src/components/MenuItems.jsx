import Link from "next/link";
import React from "react";

const MenuItems = ({ title, address, Icon }) => {
    return (
        <div>
            <Link
                href={address}
                className="mx-4 lg:mx-6 hover:bg-gray-200 py-2 px-2 rounded hover:text-amber-600"
            >
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className="hidden sm:inline my-2">{title}</p>
            </Link>
        </div>
    );
};

export default MenuItems;
