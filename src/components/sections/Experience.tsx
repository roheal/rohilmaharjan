
import { useState } from "react";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<{
    title: string;
    company: string;
    period: string;
    detailedDescription: string;
    images: string[];
  } | null>(null);
  
  const experienceDetails = [
    {
      title: "Graphic Designer",
      company: "Nepal Business Summit",
      period: "2024",
      detailedDescription: "Created visually compelling materials including promotional materials, presentations, and digital assets that enhanced the event's overall impact and communication objectives. Collaborated with marketing teams to ensure brand consistency across all event materials. Designed engaging digital content for social media campaigns to increase event visibility and attendance.",
      images: ["/experience1-image1.jpg", "/experience1-image2.jpg"]
    },
    {
      title: "Graphic Designer",
      company: "Majestic Marketing",
      period: "2023-2024",
      detailedDescription: "Created and managed digital materials, including social media posts, blog articles, videos editing, and graphics to promote the company's products and services. Collaborated with content creators to produce visually appealing marketing materials. Maintained brand consistency across various platforms while adapting designs for different target audiences. Utilized Adobe Creative Suite to develop innovative design solutions that increased client engagement.",
      images: ["/experience2-image1.jpg", "/experience2-image2.jpg"]
    },
    {
      title: "Department Manager",
      company: "Pan Gaichya",
      period: "2016-2018",
      detailedDescription: "Started as a part-time employee and was promoted to Department Manager. Oversaw team coordination, workflow implementation, and drove departmental success through dedication and exceptional performance. Managed a team of 10 employees, optimizing schedules and ensuring operational efficiency. Implemented new processes that increased department productivity by 25%. Coordinated with other department managers to streamline cross-functional projects.",
      images: ["/experience3-image1.jpg", "/experience3-image2.jpg"]
    },
    {
      title: "Restaurant Member",
      company: "Ramenya",
      period: "2017-2018",
      detailedDescription: "Started as a part-time employee at a bustling ramen restaurant and quickly transitioned to becoming a trusted Restaurant Member through exceptional skills and dedication. Mastered all positions within the restaurant, from food preparation to customer service. Trained new staff members on restaurant protocols and quality standards. Contributed to menu development by providing feedback on new offerings based on customer preferences.",
      images: ["/experience4-image1.jpg", "/experience4-image2.jpg"]
    }
  ];
  
  const handleExperienceClick = (title: string) => {
    const experience = experienceDetails.find(e => e.title === title);
    if (experience) {
      setSelectedExperience(experience);
      setOpen(true);
    }
  };
  
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        Experience
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {experienceDetails.map((experience) => (
          <ExperienceCard 
            key={experience.title}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.detailedDescription.substring(0, 120) + "..."}
            onClick={() => handleExperienceClick(experience.title)}
          />
        ))}
      </div>
      
      {selectedExperience && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-3xl cursor-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-purple-400">
                {selectedExperience.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300 text-lg font-medium">
                  {selectedExperience.company}
                </p>
              </div>
              
              <p className="text-gray-400">
                <span className="font-medium">Period:</span> {selectedExperience.period}
              </p>
              
              <DialogDescription className="text-gray-300 text-base mt-4">
                {selectedExperience.detailedDescription}
              </DialogDescription>
              
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">Gallery:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {selectedExperience.images.map((image, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-2 h-40 flex items-center justify-center">
                      <p className="text-gray-400 text-center">Image placeholder ({index + 1})</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Experience;
