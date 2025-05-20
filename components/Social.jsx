import Link from "next/link";

import {FaGithub, FaLinkedinIn} from "react-icons/fa"


const socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/AnirbanDey-9497",
        label: "GitHub Profile"
    },
    {
        icon: <FaLinkedinIn/>,
        path: "https://linkedin.com/in/anirbandey9497",
        label: "LinkedIn Profile"
    }
]

const Social = ({containerStyles, iconStyles }) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
        return(
        <Link 
            key={index} 
            href={item.path} 
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
        >
            {item.icon}
        </Link>
        );
        })}
    </div>
    );
};

{/*testing Git*/}
export default Social;
