"use client";

import { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import {motion} from "framer-motion";
import { toast } from "react-hot-toast";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+1 (240) 855-1890",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "anirbandey9497@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Washington, DC",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (value) => {
        setFormData(prev => ({
            ...prev,
            subject: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast.success('Message sent successfully!');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:"easeIn"},}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*form*/}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                       <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                           <h3 className="text-4xl">Really looking forward to have a chat with you</h3>
                           <p className="text-white/60">
                               Feel free to reach out for collaborations, job opportunities, or just to say hello!
                           </p>
                           {/*Input*/}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <Input 
                                   name="firstname"
                                   value={formData.firstname}
                                   onChange={handleInputChange}
                                   type="text" 
                                   placeholder="First Name"
                                   required
                               />
                               <Input 
                                   name="lastname"
                                   value={formData.lastname}
                                   onChange={handleInputChange}
                                   type="text" 
                                   placeholder="Last Name"
                                   required
                               />
                               <Input 
                                   name="email"
                                   value={formData.email}
                                   onChange={handleInputChange}
                                   type="email" 
                                   placeholder="Email Address"
                                   required
                               />
                               <Input 
                                   name="phone"
                                   value={formData.phone}
                                   onChange={handleInputChange}
                                   type="tel" 
                                   placeholder="Phone Number"
                                   required
                               />
                           </div>
                           {/*select*/}
                           <Select onValueChange={handleSelectChange} value={formData.subject}>
                               <SelectTrigger className="w-full">
                                   <SelectValue placeholder="Select a topic" />
                               </SelectTrigger>
                               <SelectContent>
                                   <SelectGroup>
                                       <SelectLabel>What would you like to discuss?</SelectLabel>
                                       <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                                       <SelectItem value="Backend Development">Backend Development</SelectItem>
                                       <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                                       <SelectItem value="System Design">System Design</SelectItem>
                                       <SelectItem value="Cloud Architecture">Cloud Architecture</SelectItem>
                                       <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                                       <SelectItem value="Other">Other</SelectItem>
                                   </SelectGroup>
                               </SelectContent>
                           </Select>
                           {/*textarea*/}
                           <Textarea 
                               name="message"
                               value={formData.message}
                               onChange={handleInputChange}
                               className="h-[200px]" 
                               placeholder="Type your message here."
                               required
                           />
                           {/*btn*/}
                           <Button 
                               type="submit"
                               size="md" 
                               className="max-w-40"
                               disabled={isSubmitting}
                           >
                               {isSubmitting ? 'Sending...' : 'Send message'}
                           </Button>
                       </form>
                     </div>
                     {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=>{
                                return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">
                                            {item.title}
                                        </p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
