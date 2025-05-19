"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const experiences = [
    {
        title: "Cross-Platform Desktop Application",
        company: "Infosys | CVS Aetna",
        period: "2022-2023",
        description: "Developed a robust cross-platform desktop application using Electron and React, enabling real-time data sync and native system integration.",
        tech: ["Electron", "React", "WebSockets", "Native APIs", "Performance Optimization"],
        achievements: [
            "Implemented real-time data synchronization using WebRTC",
            "Integrated native system APIs for enhanced functionality",
            "Achieved 40% performance improvement through optimization"
        ]
    },
    {
        title: "Healthcare Management System",
        company: "MediSync Project",
        period: "2023",
        description: "Built a JavaFX-based desktop application for healthcare management with offline-first architecture and real-time video consultations.",
        tech: ["JavaFX", "Offline Support", "WebRTC", "Custom Native Modules", "Local Database"],
        achievements: [
            "Implemented offline-first architecture with local database",
            "Integrated WebRTC for real-time video consultations",
            "Developed custom native modules for hardware integration"
        ]
    }
];

const skills = {
    frameworks: ["Electron", "JavaFX",  "React Native Desktop"],
    languages: ["Java", "TypeScript", "JavaScript", "HTML/CSS"],
    features: ["Native APIs", "System Integration", "Auto-updates", "Offline Support", "Hardware Access"],
    tools: ["WebRTC", "WebSockets", "Native Modules", "Cross-platform Build", "Electron Builder", "Vite"]
};

const DesktopPage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
                    className="flex flex-col gap-8"
                >
                    {/* Header */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-white">Desktop App Development</h1>
                        <p className="text-white/60 max-w-[600px]">
                            Expert in building cross-platform desktop applications with modern technologies.
                            Specialized in creating high-performance, native-feeling applications using
                            Electron, JavaFX, and other modern frameworks.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items]) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                className="bg-white/5 p-6 rounded-lg"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4 capitalize">{category}</h3>
                                <ul className="space-y-2">
                                    {items.map((skill, idx) => (
                                        <li key={idx} className="text-white/60">{skill}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-white">Key Projects & Experience</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + idx * 0.1 } }}
                                    className="bg-white/5 p-6 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                    <p className="text-accent font-medium mb-1">{exp.company} <span className="text-white/60">|</span> {exp.period}</p>
                                    <p className="text-white/80 mb-3">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {exp.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-emerald-900/70 text-emerald-300 rounded-full text-xs font-mono">{tech}</span>
                                        ))}
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-white/70">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DesktopPage; 
