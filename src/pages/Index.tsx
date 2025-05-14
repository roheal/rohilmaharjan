
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const handleDownloadCV = () => {
    // GitHub raw content URL for the CV file
    const cvUrl = "https://raw.githubusercontent.com/roheal/cv/main/rohil_maharjan_cv.pdf";
    
    // Create an anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "rohil_maharjan_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 cursor-none">
        <div className="container mx-auto px-4 pt-6">
          <Button 
            variant="outline"
            className="transition-colors duration-300 hover:bg-purple-500 hover:text-white flex items-center gap-2"
            onClick={handleDownloadCV}
          >
            <Download className="h-5 w-5" />
            <span>Download CV</span>
          </Button>
        </div>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Index;
