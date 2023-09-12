"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return (
        <div className="">
            <Link
                href={`/?genre=${param}`}
                className={`px-2 py-2 mx-4 lg:mx-6 hover:bg-gray-200 hover:text-amber-500 rounded font-semibold 
                    }`}
            >
                {title}
            </Link>
        </div>
    );
};

export default NavbarItem;

{
    /* <Link
    href={`/?genre=${param}`}
    className={`px-2 py-2 mx-4 lg:mx-6 hover:bg-gray-200 hover:text-amber-500 rounded font-semibold ${
        genre &&
        genre === param &&
        "underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
    }`}
>
    {title}
</Link> */
}
