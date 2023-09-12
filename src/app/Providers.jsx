"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
    return (
        <div>
            <ThemeProvider enableSystem={true} attribute="class">
                <div className="dark:bg-gray-800 dark:text-gray-200 text-gray-900 transition-colors duration-300 min-h-screen">
                    {children}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Providers;
