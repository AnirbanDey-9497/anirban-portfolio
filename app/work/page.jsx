"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import {Tooltip,TooltipContent,TooltipTrigger,TooltipProvider} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Rekord",
        title: "Rekord",
        description: "An AI-powered platform for seamless video recording, sharing, and analysis—featuring automatic transcription, smart summaries, and interactive Q&A.",
        stack: [{name:"Next.js"}, {name: "TypeScript"}, {name: "Socket.IO"} ,{name: "Tailwind CSS"}],
        image:"/work/rekord1.png",
        live: 'https://github.com/AnirbanDey-9497/Rekord',
        github: "https://github.com/AnirbanDey-9497/Rekord",
    },
    {
        num: "02",
        category: "MediSync",
        title: "MediSync",
        description: "A comprehensive healthcare management system that seamlessly integrates healthcare operations through microservices architecture.",
        stack: [{name:"Spring Boot"}, {name: "Kafka"}, {name: "grpc"}, {name: "AWS"}, {name: "JWT"}, {name: "Docker"}],
        image:"/work/MediSync1.png",
        live: 'https://github.com/AnirbanDey-9497/MediSync',
        github: "https://github.com/AnirbanDey-9497/MediSync",
    },
    {
        num: "03",
        category: "Wine Classification Analysis",
        title: "Wine Classification Analysis",
        description: "Machine learning project for wine quality classification using various algorithms and data analysis techniques.",
        stack: [{name:"Python"}, {name: "Scikit-learn"}, {name: "Pandas"}, {name: "NumPy"}],
        image:"/work/WineClassification.png",
        live: 'https://github.com/AnirbanDey-9497/Wine-Classification-Analysis',
        github: "https://github.com/AnirbanDey-9497/Wine-Classification-Analysis",
    },
    {
        num: "04",
        category: "Rekord Desktop",
        title: "Rekord Desktop",
        description: "A modern screen and webcam recording app with real-time preview, multi-window controls, and seamless audio/video integration. Built with Electron and React, it's designed for effortless, high-quality desktop capture.",
        stack: [{name:"Electron"}, {name: "React"}, {name: "TypeScript"}, {name: "Vite"}, {name: "IPC Renderer"}],
        image:"/work/rekord-desktop.png",
        live: 'https://github.com/AnirbanDey-9497/Rekord-Desktop',
        github: "https://github.com/AnirbanDey-9497/Rekord-Desktop",
    },
    {
        num: "05",
        category: "Rekord Express",
        title: "Rekord Express",
        description: "Node.js/Express backend for real-time video processing, chunk handling, AWS S3/CloudFront storage, and OpenAI-powered features. Core backend for the Rekord ecosystem.",
        stack: [{name:"Node.js"}, {name: "Express"}, {name: "Socket.IO"}, {name: "AWS S3"}, {name: "OpenAI"}],
        image:"/work/rekord-express.png",
        live: 'https://github.com/AnirbanDey-9497/Rekord-Express',
        github: "https://github.com/AnirbanDey-9497/Rekord-Express",
    },
    {
        num: "06",
        category: "Portfolio Website",
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing projects and skills with modern design and animations.",
        stack: [{name:"Next.js"}, {name: "Tailwind CSS"}, {name: "Framer Motion"}],
        image:"/work/portfolio.png",
        live: 'https://github.com/AnirbanDey-9497/anirban-portfolio',
        github: "https://github.com/AnirbanDey-9497/anirban-portfolio",
    },
    {
        num: "07",
        category: "Multithreading & Performance Testing",
        title: "Multithreading & Performance Testing",
        description: "Advanced Java project demonstrating multithreading concepts and performance optimization techniques.",
        stack: [{name:"Java"}, {name: "Deadlock scenarios"}, {name: "Concurrency"}, {name:"Throughput Testing"}],
        image:"/work/Multi.png",
        live: 'https://github.com/AnirbanDey-9497/Multithreading-and-Performance-Testing',
        github: "https://github.com/AnirbanDey-9497/Multithreading-and-Performance-Testing",
    },
    {
        num: "08",
        category: "Functional Programming in Java",
        title: "Functional Programming in Java",
        description: "Implementation of functional programming concepts and patterns in Java with practical examples.",
        stack: [{name:"Java"}, {name: "Lambda"}, {name: "Stream API"}, {name: "Functional Interfaces"}],
        image:"/work/Functional.png",
        live: 'https://github.com/AnirbanDey-9497/Functional_Programming_Java',
        github: "https://github.com/AnirbanDey-9497/Functional_Programming_Java",
    },
];
const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:"easeIn"},}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*project category*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            {/*project description*/}
                            <p className="text-white/60">{project.description} </p>
                            {/*stack*/}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/*Remove the last comma*/}
                                            {index !== project.stack.length -1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/*border*/}
                            <div className="border border-white/20">
                                {/*buttons*/}
                                <div className="flex items-center gap-4">
                                    {/*Live project button*/}
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    {/*Github project button*/}
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) =>{
                                return (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/*overlay*/}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/*image*/}
                                        <div className="relative w-full h-full flex items-center justify-center bg-[#18181b]">
                                            <Image src={project.image} fill className="object-contain" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                );
                            })}
                            {/*slider buttons*/}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
