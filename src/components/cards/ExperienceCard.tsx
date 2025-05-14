
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  onClick: () => void;
}

export const ExperienceCard = ({ title, company, period, description, onClick }: ExperienceCardProps) => {
  return (
    <Card 
      className="bg-gray-800/50 border-gray-700 p-6 transition-colors duration-300 hover:bg-gray-700/50 cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <Briefcase className="h-6 w-6 text-purple-400 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-purple-400">
            {title}
          </h3>
          <p className="text-gray-300 mb-1 transition-colors duration-300 hover:text-white">
            {company}
          </p>
          <p className="text-gray-400 mb-3">{period}</p>
          <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
