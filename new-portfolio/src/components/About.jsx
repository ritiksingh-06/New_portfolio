import React from "react";

function About(){
    return(
        <>
            <div className="mt-6" id="about">
                <div className="text-4xl text-center font-bold mt-12">About Me</div>
                <div className="flex mt-6">
                    <div className="bg-gray-200 w-1/2 hidden md:block lg:block"></div>
                    <div className="md:w-1/2 lg:w-1/2 w-full">
                        <div className="px-9">
                            <p>Hello! I'm Disha, a Senior Corporate Trainer with over 10 years of experience in the tech industry. My passion for software development drives me to create innovative solutions that improve efficiency and productivity. I specialize in training and mentoring teams to excel in their technical skills, ensuring they are equipped with the latest industry knowledge and best practices.</p>
                            <div className="flex mt-7">
                                <div className="w-1/2 border-2 border-black p-6 boredr border-r-0 rounded-l-2xl">
                                    <b>Name</b>
                                    <p>Ashutoshh Singh</p>
                                    <b>Email</b>
                                    <p>example@gmail.com</p>
                                    <b>Phone</b>
                                    <p>+123 456 7890</p>
                                </div>
                                <div className="w-1/2 border-2 border-black p-6 rounded-r-2xl">
                                    <b>Address</b>
                                    <p>Jaipur, Rajasthan</p>
                                    <b>Degree</b>
                                    <p>Master</p>
                                    <b>Freelance</b>
                                    <p>Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
