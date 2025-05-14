
import { useState } from "react";
import { EducationCard } from "@/components/cards/EducationCard";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Book } from "lucide-react";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<{
    title: string;
    institution: string;
    specialization?: string;
    period: string;
    detailedDescription: string;
    images: string[];
  } | null>(null);
  
  const educationDetails = [
    {
      title: "Bachelor of Science in Information and Technology",
      institution: "Presidential Graduate School",
      specialization: "Cyber Security",
      period: "Present (Running)",
      detailedDescription: "Currently pursuing a Bachelor's degree in Information Technology with a focus on Cyber Security. The program covers advanced topics in network security, ethical hacking, cryptography, and security governance. This comprehensive education is preparing me for a career in protecting digital assets and infrastructure against cyber threats.",
      images: ["/education1-image1.jpg", "/education1-image2.jpg"]
    },
    {
      title: "High School",
      institution: "Einstein Academy",
      specialization: "Computer Management",
      period: "2019",
      detailedDescription: "Completed high school education with a specialization in Computer Management. The curriculum included computer science fundamentals, basic programming, database management, and system administration. These foundational skills provided a strong base for further education in information technology.",
      images: ["/education2-image1.jpg", "/education2-image2.jpg"]
    },
    {
      title: "JLPT N3",
      institution: "Japan Educational Exchanges and Services (JESS) 日本語能力試験",
      period: "2017",
      detailedDescription: "Achieved JLPT N3 certification, demonstrating intermediate proficiency in Japanese language. This level requires understanding of Japanese used in everyday situations with some complexity. The examination tested reading, listening, and grammar skills, contributing to my multilingual capabilities.",
      images: ["/education3-image1.jpg", "/education3-image2.jpg"]
    },
    {
      title: "JLPT N5-N2",
      institution: "Ashai International School (朝日国際学院)",
      period: "2016",
      detailedDescription: "Studied Japanese language from beginner (N5) through upper-intermediate (N2) levels at Ashai International School. The comprehensive language program covered reading, writing, speaking, and listening skills with cultural components integrated throughout the curriculum.",
      images: ["/education4-image1.jpg", "/education4-image2.jpg"]
    },
    {
      title: "School",
      institution: "William Public School",
      period: "2016",
      detailedDescription: "Completed primary and secondary education at William Public School with a strong foundation in mathematics, sciences, and languages. The school's curriculum emphasized critical thinking and problem-solving skills which have been valuable throughout my academic journey.",
      images: ["/education5-image1.jpg", "/education5-image2.jpg"]
    }
  ];
  
  const handleEducationClick = (title: string) => {
    const education = educationDetails.find(e => e.title === title);
    if (education) {
      setSelectedEducation(education);
      setOpen(true);
    }
  };
  
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        Education
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {educationDetails.map((education) => (
          <EducationCard
            key={education.title}
            title={education.title}
            institution={education.institution}
            specialization={education.specialization}
            period={education.period}
            onClick={() => handleEducationClick(education.title)}
          />
        ))}
      </div>
      
      {selectedEducation && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-3xl cursor-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-purple-400">
                {selectedEducation.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300 text-lg font-medium">
                  {selectedEducation.institution}
                </p>
              </div>
              
              {selectedEducation.specialization && (
                <p className="text-gray-300">
                  <span className="font-medium">Specialization:</span> {selectedEducation.specialization}
                </p>
              )}
              
              <p className="text-gray-400">
                <span className="font-medium">Period:</span> {selectedEducation.period}
              </p>
              
              <DialogDescription className="text-gray-300 text-base mt-4">
                {selectedEducation.detailedDescription}
              </DialogDescription>
              
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">Gallery:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {selectedEducation.images.map((image, index) => (
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

export default Education;
