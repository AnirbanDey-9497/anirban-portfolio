"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        title: "Frontend Development",
        description: "Expert in building modern, responsive web applications and cross-platform desktop solutions.",
        icon: "🎨",
        link: "/services/frontend",
        skills: {
            frameworks: ["React", "Next.js", "Electron", "TailwindCSS"],
            languages: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
            tools: ["Vite", "WebRTC", "Socket.IO", "Redux"],
            concepts: ["Responsive Design", "State Management", "Performance Optimization", "Cross-browser Compatibility"]
        }
    },
    {
        title: "Backend Development",
        description: "Specialized in building scalable, high-performance server-side applications and APIs.",
        icon: "⚙️",
        link: "/services/backend",
        skills: {
            languages: ["Java", "Python", "Node.js"],
            frameworks: ["Spring Boot", "Express"],
            databases: ["PostgreSQL", "MongoDB", "Redis", "Oracle", "IBM DB2", "Microsoft SQL Server"],
            tools: ["Docker", "Kubernetes", "AWS", "Git"]
        }
    },
    {
        title: "Cloud & DevOps",
        description: "Expert in cloud architecture, containerization, and CI/CD pipelines.",
        icon: "☁️",
        link: "/services/cloud-devops",
        skills: {
            cloud: ["AWS", "ECS", "MSK", "RDS", "CloudWatch", "S3", "Lambda"],
            containers: ["Docker", "Kubernetes", "OpenShift", "Red Hat Quay"],
            cicd: ["Jenkins", "GitHub Actions", "Nexus"],
            monitoring: ["Splunk", "AppDynamics", "CloudWatch", "Prometheus"]
        }
    },
    {
        title: "Database & Performance",
        description: "Expert in database design, optimization, and performance tuning.",
        icon: "💾",
        link: "/services/database",
        skills: {
            sql: ["Oracle", "PostgreSQL", "MySQL", "IBM DB2", "Microsoft SQL Server"],
            nosql: ["MongoDB", "Neon", "Supabase", "MariaDB"],
            caching: ["Redis", "Memcached", "Spring Cache"],
            monitoring: ["AppDynamics", "Splunk", "CloudWatch", "Performance Tuning"]
        }
    },
    {
        title: "Security",
        description: "Specialized in implementing robust security measures and authentication systems.",
        icon: "🔒",
        link: "/services/security",
        skills: {
            authentication: ["JWT", "OAuth 2.0", "Clerk", "Auth0"],
            encryption: ["SSL/TLS", "AES", "RSA", "Hashing"],
            protocols: ["OIDC", "SAML", "2FA", "MFA"],
            security: ["OWASP", "Penetration Testing", "Security Auditing", "Vulnerability Assessment"]
        }
    },
    {
        title: "Desktop App Development",
        description: "Expert in building cross-platform desktop applications with modern technologies.",
        icon: "🖥️",
        link: "/services/desktop",
        skills: {
            frameworks: ["Electron", "JavaFX"],
            languages: ["Java", "TypeScript"],
            features: ["Native APIs", "System Integration", "Auto-updates", "Offline Support"],
            tools: ["WebRTC", "WebSockets", "Native Modules", "Cross-platform Build"]
        }
    },
    {
        title: "API & Communication",
        description: "Specialized in building robust communication systems and APIs.",
        icon: "🌐",
        link: "/services/api",
        skills: {
            protocols: ["REST", "gRPC", "WebSocket", "GraphQL"],
            messaging: ["Kafka", "ActiveMQ"],
            realtime: ["WebRTC", "Socket.IO"],
            integration: ["API Gateway", "Service Mesh", "Load Balancing", "Circuit Breaking"]
        }
    },
    {
        title: "Testing & Performance",
        description: "Expert in ensuring application quality and optimal performance.",
        icon: "⚡",
        link: "/services/testing",
        skills: {
            testing: ["JUnit", "Mockito", "Cypress", "Selenium"],
            performance: ["JMeter", "Async Profiler"],
            monitoring: ["Splunk", "ELK Stack"],
            optimization: ["Load Testing", "Stress Testing", "Profiling", "Memory Analysis"]
        }
    }
];

const ServicesPage = () => {
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
                        <h1 className="text-4xl font-bold text-white">Skills</h1>
                        <p className="text-white/60 max-w-[600px]">
                        A comprehensive overview of my technical expertise across software development, system architecture, and DevOps. I specialize in building scalable, secure, and high-performance applications across the full stack.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl">{service.icon}</span>
                                        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                                    </div>
                                    <Link href={service.link} className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center hover:bg-accent transition-all duration-500">
                                        <BsArrowUpRight className="text-white text-xl" />
                                    </Link>
                                </div>
                                <p className="text-white/60 mb-6">{service.description}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(service.skills).map(([category, items]) => (
                                        <div key={category} className="bg-white/5 p-4 rounded-lg">
                                            <h4 className="text-sm font-semibold text-accent mb-2 capitalize">{category}</h4>
                                            <ul className="space-y-1">
                                                {items.slice(0, 3).map((skill, idx) => (
                                                    <li key={idx} className="text-sm text-white/80">{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPage;
