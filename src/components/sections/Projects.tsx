
import { useState } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    technologies: string[];
    link: string;
    detailedDescription: string;
    images: string[];
  } | null>(null);
  
  const projectDetails = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS, featuring a modern design and responsive layout",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/roheal/rohilmaharjan",
      detailedDescription: "This portfolio website showcases my skills, experiences, and projects in an interactive and modern design. Built with React for a component-based architecture and styled with Tailwind CSS for responsive design across all devices. The site features smooth animations, dark mode, and a custom cursor implementation.",
      images: ["/project1-image1.jpg", "/project1-image2.jpg"]
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with features like instant messaging and user authentication",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      link: "https://github.com/roheal/chat-application",
      detailedDescription: "A feature-rich chat application that enables real-time messaging between users. Built with Next.js for server-side rendering and optimized performance. Utilizes Supabase for user authentication, database storage, and real-time subscriptions. Features include user profiles, direct messaging, typing indicators, and message read receipts.",
      images: ["/project2-image1.jpg", "/project2-image2.jpg"]
    }
  ];
  
  const handleProjectClick = (title: string) => {
    const project = projectDetails.find(p => p.title === title);
    if (project) {
      setSelectedProject(project);
      setOpen(true);
    }
  };
  
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projectDetails.map((project) => (
          <ProjectCard 
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            onClick={() => handleProjectClick(project.title)}
          />
        ))}
      </div>
      
      {selectedProject && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-3xl cursor-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-purple-400">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <DialogDescription className="text-gray-300 text-base">
                {selectedProject.detailedDescription}
              </DialogDescription>
              
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">Project Images:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-2 h-40 flex items-center justify-center">
                      <p className="text-gray-400 text-center">Image placeholder ({index + 1})</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-block cursor-pointer"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
