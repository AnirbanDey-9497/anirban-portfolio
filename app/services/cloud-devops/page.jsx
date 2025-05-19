"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const experiences = [
    {
        title: "AWS Cloud Migration",
        company: "MediSync Project",
        period: "2023",
        description: "Led the migration of healthcare microservices to AWS cloud infrastructure",
        technologies: ["AWS ECS", "MSK", "RDS", "CloudWatch", "Docker"],
        achievements: [
            "75% reduction in deployment time",
            "30% reduction in infrastructure costs",
            "Implemented auto-scaling and load balancing",
            "Set up comprehensive monitoring and alerting"
        ]
    },
    {
        title: "OpenShift Container Platform",
        company: "Infosys | CVS Aetna",
        period: "2021-2022",
        description: "Engineered containerized workloads for high-availability Java applications",
        technologies: ["OpenShift", "Kubernetes", "Docker", "Jenkins", "Splunk"],
        achievements: [
            "Implemented health checks and auto-scaling",
            "Reduced deployment errors by 40%",
            "Set up resource quotas and limits",
            "Configured monitoring dashboards"
        ]
    }
];

const skills = {
    cloud: ["AWS", "ECS", "MSK", "RDS", "CloudWatch", "S3", "Lambda"],
    containers: ["Docker", "Kubernetes", "OpenShift", "Red Hat Quay"],
    cicd: ["Jenkins", "GitHub Actions", "Nexus"],
    monitoring: ["Splunk", "AppDynamics", "CloudWatch"]
};

const CloudDevOpsPage = () => {
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
                        <h1 className="text-4xl font-bold text-white">Cloud & DevOps</h1>
                        <p className="text-white/60 max-w-[600px]">
                            Expert in cloud architecture, containerization, and CI/CD pipelines.
                            Specialized in AWS services, Kubernetes, and infrastructure automation.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-white/5 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-accent mb-4 capitalize">{category}</h3>
                                <ul className="space-y-2">
                                    {items.map((skill, index) => (
                                        <li key={index} className="text-white/80">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Experience */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-white">Key Projects & Experience</h2>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                                className="bg-white/5 p-6 rounded-lg"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                                        <p className="text-accent">{exp.company} • {exp.period}</p>
                                    </div>
                                    <Link href="#" className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center hover:bg-accent transition-all duration-500">
                                        <BsArrowUpRight className="text-white text-xl" />
                                    </Link>
                                </div>
                                <p className="text-white/60 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-accent">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <ul className="list-disc list-inside text-white/80 space-y-2">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CloudDevOpsPage; 
