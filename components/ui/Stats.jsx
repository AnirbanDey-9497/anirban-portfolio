"use client";

import CountUp from "react-countup";
import { FaCode, FaTools, FaProjectDiagram, FaUsers } from "react-icons/fa";

const stats = [
    {
        num: 6,
        text: "Years of Enterprise Development",
        icon: <FaCode className="text-4xl text-accent" />,
        suffix: "+",
        description: "Building scalable applications"
    },
    {
        num: 25,
        text: "Technologies Mastered",
        icon: <FaTools className="text-4xl text-accent" />,
        suffix: "+",
        description: "From Java to Cloud"
    },
    {
        num: 1000,
        text: "Code Contributions",
        icon: <FaProjectDiagram className="text-4xl text-accent" />,
        suffix: "+",
        description: "Across enterprise projects"
    },
    {
        num: 16,
        text: "Team Members Led",
        icon: <FaUsers className="text-4xl text-accent" />,
        suffix: "+",
        description: "In high-impact projects"
    },
];

const Stats = () => {
    return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return(
                    <div 
                        className="flex-1 flex flex-col items-center justify-center xl:justify-start bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                        key={index}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            {item.icon}
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-4xl xl:text-5xl font-extrabold text-white"
                            />
                            {item.suffix && <span className="text-4xl xl:text-5xl font-extrabold text-white">{item.suffix}</span>}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">{item.text}</h3>
                        <p className="text-white/60 text-center">{item.description}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
    );
};

{/*testing Git*/}
export default Stats;
