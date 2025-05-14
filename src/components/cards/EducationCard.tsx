
import { Book } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EducationCardProps {
  title: string;
  institution: string;
  specialization?: string;
  period: string;
  onClick: () => void;
}

export const EducationCard = ({ title, institution, specialization, period, onClick }: EducationCardProps) => {
  return (
    <Card 
      className="bg-gray-800/50 border-gray-700 p-6 transition-colors duration-300 hover:bg-gray-700/50 cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <Book className="h-6 w-6 text-purple-400 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-purple-400">
            {title}
          </h3>
          <p className="text-gray-300 mb-2 transition-colors duration-300 hover:text-white">
            {institution}
          </p>
          {specialization && (
            <p className="text-gray-300 mb-2 transition-colors duration-300 hover:text-white">
              Specialization: {specialization}
            </p>
          )}
          <p className="text-gray-400">{period}</p>
        </div>
      </div>
    </Card>
  );
};
