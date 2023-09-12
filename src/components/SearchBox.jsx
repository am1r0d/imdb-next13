"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    };

    return (
        <div className="hover:shadow-md rounded-full focus-within:shadow-md dark:bg-gray-900 dark:text-gray-200">
            <form
                onSubmit={handleSubmit}
                className="flex max-w-6xl mx-auto justify-between items-center px-5 border rounded-full "
            >
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Search keywords..."
                    className="w-full h-10 rounded-fll placeholder-gray-500 outline-none bg-transparent focus:outline-none flex-1"
                />
                <button
                    disabled={!search}
                    className="text-amber-600 disabled:text-gray-400"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
