import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import {Section} from "lucide-react";
import Link from "next/link";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return(
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/*text*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl font-semibold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Senior Software Engineer</span>
              <h1 className="h1 mb-6">
                Hi, I'm <br /><span className="text-accent">Anirban Dey</span>
              </h1>
              <p className="max-w-[500px] mb-6 text-white/80">
                A results-driven Software Engineer with 6+ years of experience in building scalable applications. 
                Led a $1M modernization project at CVS Aetna, achieving 40% performance improvement and 90% disk usage reduction.
                Currently pursuing Master's in Software Engineering at University of Maryland.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Microservices</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Kubernetes</span>
              </div>
              <p className="max-w-[500px] mb-9 text-white/80">
                Proven track record in system design, performance optimization, and leading development teams. 
                Passionate about building robust, scalable solutions that drive business impact.
                Let's connect to discuss how I can contribute to your team's success!
              </p>
                {/*Social Media*/}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Link href="/resume/Anirban_Dey_Resume.pdf" target="_blank" download>
                        <Button
                         variant="outline"
                         size="lg"
                         className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300">
                            <span>Download Resume</span>
                            <FiDownload className="text-xl"/>
                        </Button>
                    </Link>
                    <div className="mb-8 xl:mb-0">
                        <Social
                            containerStyles="flex gap-6"
                            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
            </div>
          </div>
        </div>
          <Stats/>
      </section>
  );
};

export default Home;
