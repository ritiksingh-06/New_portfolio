import React from "react";
import './aa.css'

import docker from '../assets/imgs/docker.webp';
import kubernetes from '../assets/imgs/kubernetes.svg';
import Jenkins from '../assets/imgs/Jenkins.png';
import github from '../assets/imgs/github.png';
import githubaction from '../assets/imgs/githubaction.png';
import gitlab from '../assets/imgs/gitlab.png';
import terraform from '../assets/imgs/terraform.png';
import ansible from '../assets/imgs/ansible.png';
import datadog from '../assets/imgs/datadog.png';
import linux from '../assets/imgs/linux.png';
import aws from '../assets/imgs/aws.png';
import azure from '../assets/imgs/azure.png';
import python from '../assets/imgs/python.png';

function Services(){
    return(
        <>
            <div id="services" className="mx-4 md:mx16 lg:mx-24">
                <div className="text-4xl text-center font-bold mt-12">My TechSkills</div>
                <div className="mt-11">
                    <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={docker} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Docker</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={kubernetes} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Kubernetes</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={Jenkins} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Jenkins</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={github} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Github</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={githubaction} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Github Action</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={gitlab} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Gitlab</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={terraform} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Terraform</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={ansible} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Ansible</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={datadog} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Datadog</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={linux} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Linux</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={aws} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">AWS Cloud</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={azure} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Azure Cloud</b></div></a>
                        <a href="/" className="flex justify-center"><div className="relative group flex flex-col cursor-pointer duration-300 ease-in-out transform hover:scale-105 border-0 hover:border-2 hover:border-black items-center bg-slate-300 w-60 h-36 rounded-2xl flip-back-animation flip-animation"><img src={python} className="filter grayscale group-hover:filter-none transition duration-300 ease-in-out mt-4 h-16"/><b className="mt-2 text-3xl">Python</b></div></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;