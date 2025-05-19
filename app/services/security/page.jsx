"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const experiences = [
    {
        title: "Enterprise Security Implementation",
        company: "Infosys | CVS Aetna",
        period: "2022-2023",
        description: "Implemented enterprise-grade authentication and authorization using OAuth 2.0, JWT, and Clerk, securing applications for over 1M users.",
        tech: ["OAuth 2.0", "JWT", "Clerk", "RBAC", "Security Auditing"],
        achievements: [
            "Reduced security incidents by 60% through comprehensive security measures",
            "Integrated Clerk for seamless authentication across multiple applications",
            "Implemented role-based access control (RBAC) for enhanced security"
        ]
    },
    {
        title: "Security Architecture Design",
        company: "MediSync Project",
        period: "2023",
        description: "Designed and implemented end-to-end encryption and multi-factor authentication for sensitive medical data, ensuring compliance and data safety.",
        tech: ["End-to-End Encryption", "MFA", "JWT", "OAuth", "Vulnerability Assessment"],
        achievements: [
            "Set up multi-factor authentication (MFA) for enhanced security",
            "Conducted security audits and vulnerability assessments",
            "Implemented secure API authentication using JWT and OAuth"
        ]
    }
];

const skills = {
    authentication: ["JWT", "OAuth 2.0", "Clerk", "Auth0", "SAML", "OpenID Connect"],
    encryption: ["SSL/TLS", "AES", "RSA", "Hashing", "Public Key Infrastructure"],
    protocols: ["OIDC", "SAML", "2FA", "MFA", "OAuth 2.0", "JWT"],
    security: ["OWASP", "Penetration Testing", "Security Auditing", "Vulnerability Assessment"]
};

const SecurityPage = () => {
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
                        <h1 className="text-4xl font-bold text-white">Security</h1>
                        <p className="text-white/60 max-w-[600px]">
                            Specialized in implementing robust security measures and authentication systems.
                            Expert in securing applications through modern authentication protocols, encryption,
                            and comprehensive security practices.
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

export default SecurityPage; 
