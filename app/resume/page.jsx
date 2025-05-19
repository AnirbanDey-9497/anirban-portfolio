"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { useRouter } from 'next/navigation';

//Add details about yourself here
const about={
    title:"About me",
    description:"Full Stack Developer with 6+ years of experience in building scalable applications and leading technical teams. Currently pursuing Master's in Software Engineering at University of Maryland.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Anirban Dey"
        },
        {
            fieldName: "Email",
            fieldValue: "anirbandey9497@gmail.com"
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
            fieldName: "LinkedIn",
            fieldValue: "linkedin.com/in/anirbandey9497"
        },
        {
            fieldName: "GitHub",
            fieldValue: "github.com/AnirbanDey-9497"
        },
    ]
};

const  experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Full Stack Developer with 6+ years of experience in building scalable applications and leading technical teams",
    items:[
        {
            company: "Infosys | CVS Aetna",
            position: "Technology Analyst",
            duration:"Sep'22 - Aug'23",
            location: "Bangalore, India",
            description: [
                "Spearheaded a $1M modernization effort to upgrade 25+ legacy applications (~300K LOC) from Java 8 to Java 17, resulting in a 90% reduction in disk usage and up to 40% improvement in application performance.",
                "Managed and mentored a 16-member development team, delivering high-impact solutions on schedule and securing a 5-year client contract renewal through strategic planning, quality execution, stakeholder alignment.",
                "Remediated security vulnerabilities flagged by Nexus IQ and Checkmarx, enhancing application resilience and reducing potential threats by 25% through proactive code analysis and mitigation strategies.",
                "Integrated Redis as a low-latency caching layer for frequently accessed APIs, reducing database query load by 70% and cutting average response times from 450ms to under 100ms—accelerating claims processing for over 1 million CVS Aetna users.",
                "Leveraged Async Profiler for low-overhead CPU and memory profiling in Spring Boot microservices; analyzed flame graphs to identify thread contention, memory leaks and GC bottlenecks, then optimized thread pool sizes, refined garbage collection strategies, and reconfigured JVM parameters, achieving a 30% increase in throughput"
            ]
        },
        {
            company: "Infosys | CVS Aetna",
            position: "Senior Systems Engineer",
            duration:"Feb'21 - Sep'22",
            location: "Bangalore, India",
            description: [
                "Optimized and stabilized 10+ Java/J2EE applications in a high-traffic production environment, reducing system crashes by 40% and ensuring uninterrupted service for over 1 million active users.",
                "Engineered scalable WebRTC infrastructure supporting 10,000+ real-time peer sessions with <200ms latency, integrating custom STUN/TURN servers, SFU-based media routing, and adaptive bitrate control for network efficiency.",
                "Engineered OpenShift pods and containers for high-availability Java applications, implementing health checks, auto-scaling, & resource quotas to ensure optimal performance & fault tolerance in secure production environments.",
                "Configured Splunk and AppDynamics dashboards for real-time monitoring & cutting issue resolution time in half."
            ]
        },
        {
            company: "Infosys | CVS Aetna",
            position: "Systems Engineer",
            duration:"Nov'19 - Feb'21",
            location: "Bangalore, India",
            description: [
                "Conducted comprehensive unit testing of applications using JUnit and Mockito, ensuring robustness & reliability of critical features through rigorous test case design & execution, leading to 30% decrease in post-release defects.",
                "Resolved batch job failures & optimized scheduling logic, cutting downtime by 40% & boosting system availability.",
                "Automated Jenkins CI/CD pipelines cutting deployment errors and manual work while accelerating release cycles."
            ]
        },
        {
            company: "Rekord - AI Driven Screen Recording & Video Sharing Platform",
            position: "Full Stack Developer",
            duration:"2025",
            location: "College Park, MD",
            description: [
                "Built a cross-platform desktop app using Electron, React, and Vite, featuring a multi-window architecture (main, studio, webcam) and 1080p/60fps capture with real-time preview via IPC Renderer.",
                "Designed and deployed a scalable backend pipeline using Express.js, AWS S3, and CloudFront, supporting 1,000+ concurrent 1080p streams with sub-100ms video processing latency via WebSocket communication.",
                "Integrated AI features using OpenAI Whisper API for transcription and Q&A, reducing manual content processing time by 80% and enabling searchable video playback.",
                "Achieved 99.9% uptime through global CDN distribution via CloudFront and real-time streaming infrastructure."
            ]
        },
        {
            company: "MediSync Healthcare System",
            position: "Backend Developer",
            duration:"2025",
            location: "College Park, MD",
            description: [
                "Built scalable Spring Boot microservices for 10,000+ concurrent users by designing a gRPC+Kafka communication layer with API Gateway for routing, authentication, and rate limiting—cutting response times by 40% and messaging latency by 60% through asynchronous, fault-tolerant orchestration.",
                "Deployed containerized workloads to AWS ECS with MSK, RDS, and CloudWatch, cutting deployment time by 75% and reducing infrastructure costs by 30% through efficient resource provisioning."
            ]
        }
    ],
};

const education = {
    icon : "/assets/resume/cap.svg",
    title: "My education",
    description: "Pursuing advanced education in Software Engineering",
    items: [
        {
            institution: "University of Maryland, College Park",
            degree: "Master of Engineering, Software Engineering",
            duration: "2023-2025",
        }
    ],
};

const skills= {
    title: "My skills",
    description: "A comprehensive set of technologies and tools used in modern software engineering.",
    skillList: [
        // Languages
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <FaNodeJs />, name: "Java" }, // No Java icon in react-icons/fa
        { icon: <FaJs />, name: "TypeScript" },
        { icon: <FaJs />, name: "SQL" },
        // Frameworks & Libraries
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaNodeJs />, name: "Express.js" },
        { icon: <FaNodeJs />, name: "Electron" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
        { icon: <FaNodeJs />, name: "Spring Boot" },
        { icon: <FaNodeJs />, name: "Hibernate" },
        { icon: <FaNodeJs />, name: "JUnit" },
        { icon: <FaNodeJs />, name: "Mockito" },
        { icon: <FaNodeJs />, name: "Socket.IO" },
        // Databases
        { icon: <FaNodeJs />, name: "Oracle 19c" },
        { icon: <FaNodeJs />, name: "PostgreSQL" },
        { icon: <FaNodeJs />, name: "IBM DB2" },
        { icon: <FaNodeJs />, name: "Microsoft SQL Server" },
        { icon: <FaNodeJs />, name: "MySQL" },
        { icon: <FaNodeJs />, name: "MongoDB" },
        { icon: <FaNodeJs />, name: "Neon" },
        { icon: <FaNodeJs />, name: "Supabase" },
        { icon: <FaNodeJs />, name: "MariaDB" },
        // Tools
        { icon: <FaNodeJs />, name: "RHEL" },
        { icon: <FaNodeJs />, name: "Vite" },
        { icon: <FaNodeJs />, name: "Jenkins" },
        { icon: <FaNodeJs />, name: "Kafka" },
        { icon: <FaNodeJs />, name: "Redis" },
        { icon: <FaNodeJs />, name: "AppDynamics" },
        { icon: <FaNodeJs />, name: "Nexus IQ" },
        { icon: <FaNodeJs />, name: "Checkmarx" },
        { icon: <FaNodeJs />, name: "Splunk" },
        { icon: <FaNodeJs />, name: "Kubernetes (Openshift)" },
        { icon: <FaNodeJs />, name: "Docker" },
        { icon: <FaNodeJs />, name: "Red Hat Quay" },
        { icon: <FaNodeJs />, name: "ServiceNow" },
        { icon: <FaNodeJs />, name: "Vercel" },
        { icon: <FaNodeJs />, name: "IBM API Connect" },
        { icon: <FaNodeJs />, name: "IBM DataPower" },
        { icon: <FaNodeJs />, name: "Stripe" },
        { icon: <FaNodeJs />, name: "Clerk" },
        { icon: <FaNodeJs />, name: "Async Profiler" },
        { icon: <FaNodeJs />, name: "Nodemailer" },
        { icon: <FaNodeJs />, name: "Prisma" },
        { icon: <FaNodeJs />, name: "Zod" },
        // Cloud & Infra
        { icon: <FaNodeJs />, name: "AWS (ECS, MSK, RDS, CloudWatch, CloudFront, S3, Lambda)" },
        { icon: <FaNodeJs />, name: "WebSphere Application Server" },
        { icon: <FaNodeJs />, name: "Tomcat" },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume = () => {
    const router = useRouter();
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills" onClick={() => router.push('/services')}>Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        {/*experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                            <li key={index} className="bg-[#232329] p-6 rounded-xl">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                                                        <div>
                                                            <h3 className="text-xl font-bold">{item.position}</h3>
                                                            <div className="flex items-center gap-3 mt-1">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p className="text-white/60">{item.company}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-end">
                                                            <span className="text-accent">{item.duration}</span>
                                                            <span className="text-white/60 text-sm">{item.location}</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-2 text-white/80">
                                                        {item.description.map((desc, idx) => (
                                                            <li key={idx} className="text-sm">{desc}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/*education*/}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*dot*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/*skills*/}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index)=>{
                                        return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/*about*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=>{
                                        return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl break-all">{item.fieldValue}</span>
                                        </li>
                                    );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;
