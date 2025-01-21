"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

//Add details about yourself here
const about={
    title:"About me",
    description:"Yeah write about yourself",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Anirban Dey"
        },
        {
            fieldName: "Name",
            fieldValue: "Anirban Dey"
        },
        {
            fieldName: "Phone",
            fieldValue: "+1-(240)855-1890"
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ years"
        },
        {
            fieldName: "Name",
            fieldValue: "Anirban Dey"
        },
        {
            fieldName: "Name",
            fieldValue: "Anirban Dey"
        },
    ]
};

const  experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: " Put after you have a clue",
    items:[
        {
            company: "Infosys",
            position: "Full Stack Developer",
            duration:"2020-Present",
        },
        {
            company: "Infosys",
            position: "Full Stack Developer",
            duration:"2020-Present",
        },
        {
            company: "Infosys",
            position: "Full Stack Developer",
            duration:"2020-Present",
        },
        {
            company: "Infosys",
            position: "Full Stack Developer",
            duration:"2020-Present",
        },
    ],

};

const education = {
    icon : "/assets/resume/cap.svg",
    title: "My education",
    description: "Put after you have a clue",
    items: [
        {
            institution: "University Of Maryland, College Park",
            degree: "Master Of Engineering",
            duration: "2023-2025",
        },
        {
            institution: "University Of Maryland, College Park",
            degree: "Master Of Engineering",
            duration: "2023-2025",
        },
    ],
};

const skills= {
    title: "My skills",
    description: "Put when you have a clue",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React.Js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.Js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailWind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList>
                        <TabsTrigger>Experience</TabsTrigger>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                        <TabsTrigger>About me</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;