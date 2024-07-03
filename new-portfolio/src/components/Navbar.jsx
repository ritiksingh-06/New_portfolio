import React from "react";

function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-10 border-black border-b-2">
            {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav> */}
            <nav className="bg-gray-50 dark:bg-gray-700 flex">
                <div className="w-1/5 text-center self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Portfolio.</div>
                <div className="w-4/5 px-4 py-3 mx-auto flex justify-center">
                    <span className="flex">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li><a href="#home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a></li>
                            <li><a href="#about" className="text-gray-900 dark:text-white hover:underline">About</a></li>
                            <li><a href="#services" className="text-gray-900 dark:text-white hover:underline">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-900 dark:text-white hover:underline">Portfolio</a></li>
                            <li><a href="#contact" className="text-gray-900 dark:text-white hover:underline">Contact</a></li>
                        </ul>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar