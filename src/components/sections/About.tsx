
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        About Me
      </h2>
      <Card className="bg-gray-800/50 border-gray-700 p-6 md:p-8 max-w-3xl mx-auto transition-colors duration-300 hover:bg-gray-700/50">
        <p className="text-gray-300 leading-relaxed transition-colors duration-300 hover:text-white">
          Full Stack Web Developer focused on creating responsive and user-friendly web applications. 
          Experienced in both frontend and backend development, with a strong foundation in JavaScript, 
          TypeScript, and modern web technologies. Currently expanding my expertise in cloud technologies 
          and exploring new frameworks to build better web solutions.
        </p>
      </Card>
    </section>
  );
};

export default About;
