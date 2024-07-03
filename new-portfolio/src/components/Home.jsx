import React from "react";

function Home(){
    return(
        <div id="home">
            <div className="flex justify-end px-7 mt-14"><button className="bg-gray-50 rounded duration-500 hover:bg-gray-900 hover:text-gray-50 px-4 py-2">Get my CV</button></div>
            <div className="flex justify-center items-center">
                <div>
                    <div className="flex justify-center">
                        <div className="rounded-full border border-black" style={{width: '250px', height:"250px"}}>
                            {/* <img src="https://i.pinimg.com/originals/8b/dc/f1/8bdcf1d91787314100cf7173a14a2663.jpg" className="rounded-full" style={{width: '250px'}}/> */}
                            <img src="https://i.pinimg.com/736x/44/b7/0a/44b70a623fd1c44e429e836ccfe3db6e.jpg" className="rounded-full filter grayscale hover:filter-none transition duration-300 ease-in-out" style={{width: '250px'}}/>
                        </div>
                    </div>
                    <div className="text-3xl mt-12 font-medium text-center text-gray-600">Disha</div>
                    <div className="text-3xl md:text-6xl lg:text-7xl mt-3 text-center">Senior Corporate Trainer</div>
                    <div className="text-center mt-4 text-xl text-gray-600">I have a passion for software. I enjoy creating tools that make life easier for people.</div>
                </div>

            </div>
            <div className="flex justify-end px-24 mt-9">
                <div className="flex gap-2">
                    <span className="flex justify-center items-center border-2 border-black rounded-full w-10 h-10 duration-300 hover:bg-gray-900 hover:text-gray-50 hover:shadow-lg hover:shadow-gray-900 cursor-pointer"><i class='bx bxl-github text-2xl'></i></span>
                    <span className="flex justify-center items-center border-2 border-black rounded-full w-10 h-10 duration-300 hover:bg-gray-900 hover:text-gray-50 hover:shadow-lg hover:shadow-gray-900 cursor-pointer"><i class='bx bxl-twitter text-2xl'></i></span>
                    <span className="flex justify-center items-center border-2 border-black rounded-full w-10 h-10 duration-300 hover:bg-gray-900 hover:text-gray-50 hover:shadow-lg hover:shadow-gray-900 cursor-pointer"><i class='bx bxl-instagram text-2xl'></i></span>
                    <span className="flex justify-center items-center border-2 border-black rounded-full w-10 h-10 duration-300 hover:bg-gray-900 hover:text-gray-50 hover:shadow-lg hover:shadow-gray-900 cursor-pointer"><i class='bx bxl-linkedin text-2xl'></i></span>
                </div>
            </div>
        </div>
    )
}


export default Home