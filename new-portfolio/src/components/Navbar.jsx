import React, {useState} from "react";

function Navbar() {


    const [menuShowed, setMenuShowed] = useState(false);
    const handleOnClickMenu = () => {
        setMenuHide(false);
        setMenuShowed(true);
    }

    const [menuHide, setMenuHide] = useState(false);
    const handleOnClickCross = () => {
        setMenuShowed(false);
        setMenuHide(true);
    }

    document.body.addEventListener("click", function(){
        // handleOnClickCross();
    })

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10 border-black border-b-2">
                <nav className="bg-gray-50 dark:bg-gray-700 flex">
                    <div className="w-1/5 text-center self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Portfolio.</div>
                    <div className="w-4/5 px-4 md:py-3 lg:py-3 mx-auto flex md:justify-center lg:justify-center justify-end">
                        <span className="hidden md:block lg:block">
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li><a href="#home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a></li>
                                <li><a href="#about" className="text-gray-900 dark:text-white hover:underline">About</a></li>
                                <li><a href="#services" className="text-gray-900 dark:text-white hover:underline">Services</a></li>
                                <li><a href="#portfolio" className="text-gray-900 dark:text-white hover:underline">Portfolio</a></li>
                                <li><a href="#contact" className="text-gray-900 dark:text-white hover:underline">Contact</a></li>
                            </ul>
                        </span>
                        <span className="md:hidden lg:hidden">
                            <i className='bx bx-menu text-4xl px-2 border active:border-black active:scale-95' onClick={handleOnClickMenu}></i>
                        </span>
                    </div>
                </nav>
            </div>
            <div className="flex justify-end">
                <div className={`fixed w-48 h-72 rounded-bl-xl bg-gray-300 z-30 ${menuShowed ? 'block' : 'hidden'} ${menuHide ? 'hidden' : 'block'} md:hidden lg:hidden`}>
                    <div className="flex justify-end border border-b-black">
                        <i className="bx bx-x text-4xl border active:border-black active:scale-75 px-1" onClick={handleOnClickCross}></i>
                    </div>
                    <div className="pt-2" onClick={handleOnClickCross}>
                        <a href="#home"><div className="mt-1 pl-3 text-xl duration-300 active:bg-gray-400 active:scale-90">Home</div></a>
                        <a href="#about"><div className="mt-1 pl-3 text-xl duration-300 active:bg-gray-400 active:scale-90">About</div></a>
                        <a href="#services"><div className="mt-1 pl-3 text-xl duration-300 active:bg-gray-400 active:scale-90">Services</div></a>
                        <a href="#portfolio"><div className="mt-1 pl-3 text-xl duration-300 active:bg-gray-400 active:scale-90">Portfolio</div></a>
                        <a href="#contact"><div className="mt-1 pl-3 text-xl duration-300 active:bg-gray-400 active:scale-90">Contact</div></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar