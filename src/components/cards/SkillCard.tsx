
import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  onSkillClick: (skill: string) => void;
}

export const SkillCard = ({ title, skills, onSkillClick }: SkillCardProps) => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 p-6 transition-colors duration-300 hover:bg-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300 hover:text-purple-400">
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li 
            key={skill} 
            className="text-gray-300 transition-colors duration-300 hover:text-white cursor-pointer hover:bg-gray-700/50 p-2 rounded-md"
            onClick={() => onSkillClick(skill)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
};
