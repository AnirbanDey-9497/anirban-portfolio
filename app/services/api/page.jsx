"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const experiences = [
    {
        title: "Microservices Communication System",
        company: "Infosys | CVS Aetna",
        period: "2022-2023",
        description: "Implemented gRPC-based communication and Kafka event-driven architecture for microservices, reducing API response time by 50%.",
        tech: ["gRPC", "Kafka", "WebSocket", "Event-driven", "Microservices"],
        achievements: [
            "Developed WebSocket-based real-time notification system",
            "Set up Kafka message broker for event-driven architecture",
            "Achieved 50% reduction in API response time"
        ]
    },
    {
        title: "Real-time Healthcare Platform",
        company: "MediSync Project",
        period: "2023",
        description: "Built a real-time healthcare platform with WebRTC video consultations, RESTful APIs, and GraphQL support for seamless data exchange.",
        tech: ["WebRTC", "REST API", "GraphQL", "WebSocket", "Kafka"],
        achievements: [
            "Implemented RESTful APIs with GraphQL support",
            "Developed WebSocket-based chat system",
            "Integrated Kafka for real-time data streaming"
        ]
    }
];

const skills = {
    protocols: ["REST", "gRPC", "WebSocket", "GraphQL", "SOAP", "gRPC-Web"],
    messaging: ["Kafka", "RabbitMQ", "ActiveMQ", "Redis Pub/Sub"],
    realtime: ["WebRTC", "Socket.IO",  "Server-Sent Events"],
    integration: ["API Gateway", "Service Mesh", "Load Balancing", "Circuit Breaking", "Rate Limiting"]
};

const ApiPage = () => {
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
                        <h1 className="text-4xl font-bold text-white">API & Communication</h1>
                        <p className="text-white/60 max-w-[600px]">
                            Specialized in building robust communication systems and APIs.
                            Expert in implementing various communication protocols, real-time systems,
                            and scalable messaging solutions.
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

export default ApiPage; 
