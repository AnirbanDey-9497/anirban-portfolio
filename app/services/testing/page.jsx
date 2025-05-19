"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const experiences = [
    {
        title: "Performance Optimization",
        company: "Infosys | CVS Aetna",
        period: "2022-2023",
        description: "Led performance optimization initiatives, reducing API response time and achieving near-perfect test coverage for critical systems.",
        tech: ["JMeter", "JUnit", "Performance Tuning", "Test Automation", "Profiling"],
        achievements: [
            "Implemented comprehensive test automation suite",
            "Achieved 99.9% test coverage for critical components",
            "Optimized database queries resulting in 40% faster operations"
        ]
    },
    {
        title: "Quality Assurance System",
        company: "MediSync Project",
        period: "2023",
        description: "Established a robust QA system with Cypress and JMeter, supporting 10,000+ concurrent users and reducing bug reports by 70%.",
        tech: ["Cypress", "JMeter", "Lighthouse", "Load Testing", "E2E Automation"],
        achievements: [
            "Implemented load testing with JMeter for 10,000 concurrent users",
            "Reduced bug reports by 70% through comprehensive testing",
            "Optimized frontend performance achieving 90+ Lighthouse score"
        ]
    }
];

const skills = {
    testing: ["JUnit", "Jest", "Cypress", "Selenium", "TestNG", "Mockito"],
    performance: ["JMeter", "Gatling", "Lighthouse", "WebPageTest", "Chrome DevTools"],
    monitoring: ["New Relic", "Datadog", "Grafana", "ELK Stack", "Prometheus"],
    optimization: ["Load Testing", "Stress Testing", "Profiling", "Memory Analysis", "Code Optimization"]
};

const TestingPage = () => {
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
                        <h1 className="text-4xl font-bold text-white">Testing & Performance</h1>
                        <p className="text-white/60 max-w-[600px]">
                            Expert in ensuring application quality and optimal performance.
                            Specialized in comprehensive testing strategies, performance optimization,
                            and continuous monitoring solutions.
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

export default TestingPage; 
