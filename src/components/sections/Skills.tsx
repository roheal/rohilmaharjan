
import { useState } from "react";
import { SkillCard } from "@/components/cards/SkillCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<{ title: string; description: string; }>({ title: "", description: "" });

  const skillDetails = {
    "Linux Commands": "I've worked extensively with Linux systems, learning commands for file management, system administration, and network configuration through personal projects and coursework in my BScIT program.",
    "Network Simulation (Cisco Packet Tracer)": "I've designed and configured virtual networks to simulate real-world networking scenarios, learning about routing, switching, and network protocols.",
    "Python": "I've developed small automation scripts and data analysis tools, applying fundamentals of object-oriented programming in Python.",
    "Java": "I've built desktop applications and learned core programming concepts like inheritance, polymorphism, and encapsulation through Java projects.",
    "C++": "I've implemented algorithms and data structures, gaining a deeper understanding of memory management and system-level programming.",
    "HTML/CSS": "I've designed and coded responsive websites, implementing modern design principles and CSS frameworks.",
    "MySQL": "I've designed database schemas, written complex queries, and managed databases for various academic projects.",
    "Adobe Photoshop": "I've created digital artworks, marketing materials, and edited photographs professionally for clients and personal projects.",
    "Adobe Premiere Pro": "I've edited videos for social media content, presentations, and short films with transitions, effects, and color grading.",
    "Adobe InDesign": "I've designed brochures, flyers, and publications with professional layouts and typography for marketing purposes.",
    "Adobe Lightroom": "I've enhanced and color-graded photographs for personal and client projects, developing a cohesive visual style.",
    "Autopsy": "I've analyzed disk images and recovered deleted files during cybersecurity coursework, learning digital forensics principles.",
    "NTPS": "I've used Network Time Protocol Server for timing synchronization in network security projects.",
    "Wireshark": "I've analyzed network traffic to troubleshoot issues and detect security threats in controlled environments.",
    "Nmap": "I've performed network scanning and security assessments, identifying open ports and potential vulnerabilities.",
    "AWS Server Management": "I've configured and managed cloud servers, implementing security best practices and scalable solutions.",
    "Cloudflare Services": "I've implemented DDoS protection, CDN services, and SSL certificates to secure and optimize websites."
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill({ 
      title: skill, 
      description: skillDetails[skill as keyof typeof skillDetails] || "Detailed information coming soon." 
    });
    setOpen(true);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <SkillCard 
          title="Technical Skills" 
          skills={[
            "Linux Commands",
            "Network Simulation (Cisco Packet Tracer)",
            "Python",
            "Java",
            "C++",
            "HTML/CSS",
            "MySQL"
          ]}
          onSkillClick={handleSkillClick}
        />
        <SkillCard 
          title="Design & Creative" 
          skills={[
            "Adobe Photoshop",
            "Adobe Premiere Pro",
            "Adobe InDesign",
            "Adobe Lightroom"
          ]} 
          onSkillClick={handleSkillClick}
        />
        <SkillCard 
          title="Security & Cloud" 
          skills={[
            "Autopsy",
            "NTPS",
            "Wireshark",
            "Nmap",
            "AWS Server Management",
            "Cloudflare Services"
          ]} 
          onSkillClick={handleSkillClick}
        />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-purple-400">
              {selectedSkill.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300 mt-4">
              {selectedSkill.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
