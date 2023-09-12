import React from "react";

const loading = () => {
    return (
        <>
            {/* <div className="flex justify-center mt-20">
                <img
                    src="loading2.svg"
                    alt="loading..."
                    className="h-96 h-50"
                />
            </div> */}
            <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
                <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
                <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
                <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 max-w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </>
    );
};

export default loading;
