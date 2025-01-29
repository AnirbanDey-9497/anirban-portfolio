"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+40) 321 654 876",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "anirbandey9497@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "7704 Adelphi Road, Hyattsville 20783",
    },
];

import {motion} from "framer-motion";

const Contact = () => {
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:"easeIn"},}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*form*/}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                       <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                           <h3 className="text-4xl">Really looking forward to have a chat with you</h3>
                           <p className="text-white/60">
                               Write after you have a clue
                           </p>
                           {/*Input*/}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <Input type="firstname" placeholder="First Name"/>
                               <Input type="lastname" placeholder="Last Name"/>
                               <Input type="email" placeholder="Email Address"/>
                               <Input type="phone" placeholder="Phone Number"/>
                           </div>
                           {/*select*/}
                           <Select>
                               <SelectTrigger className="w-full">
                                   <SelectValue placeholder="Select an option" />
                               </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select an option</SelectLabel>
                                        <SelectItem value="est">Java</SelectItem>
                                        <SelectItem value="cst">Kafka</SelectItem>
                                        <SelectItem value="mst">React</SelectItem>
                                    </SelectGroup>
                                 </SelectContent>
                           </Select>
                           {/*textarea*/}
                           <Textarea className="h-[200px]" placeholder="Type your message here." />
                           {/*btn*/}
                           <Button size="md" className="max-w-40">
                               Send message
                           </Button>
                       </form>
                     </div>
                     {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((item, index)=>{
                                return <li
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

{/*testing Git*/}
export default Contact;