
import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  onClick: () => void;
}

export const ProjectCard = ({ title, description, technologies, link, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="bg-gray-800/50 border-gray-700 p-6 transition-colors duration-300 hover:bg-gray-700/50 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <Award className="h-6 w-6 text-purple-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-purple-400">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-white">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm transition-colors duration-300 hover:bg-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            View Project →
          </a>
        </div>
      </div>
    </Card>
  );
};
