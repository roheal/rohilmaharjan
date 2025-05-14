
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactButton from "@/components/ContactButton";
import ViewCounter from "@/components/ViewCounter";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in transition-colors duration-300 hover:text-purple-400">
          Rohil Maharjan
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            variant="outline" 
            size="icon" 
            asChild
            className="transition-colors duration-300 hover:bg-purple-500 hover:text-white"
          >
            <a href="https://github.com/roheal" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            asChild
            className="transition-colors duration-300 hover:bg-purple-500 hover:text-white"
          >
            <a href="https://www.linkedin.com/in/rohil-maharjan-69b9a0245/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <ContactButton 
            email="royal.maharjan2022@gmail.com" 
            className="transition-colors duration-300 hover:bg-purple-500 hover:text-white"
          />
        </div>
        <ViewCounter />
      </div>
    </section>
  );
};

export default Hero;
