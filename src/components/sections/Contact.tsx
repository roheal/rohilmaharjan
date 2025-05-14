
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center transition-colors duration-300 hover:text-purple-400">
        Get in Touch
      </h2>
      <div className="text-center">
        <p className="text-gray-300 mb-6 transition-colors duration-300 hover:text-white">
          I'm always open to new opportunities and collaborations.
        </p>
        <Button 
          onClick={() => {
            window.location.href = "mailto:royal.maharjan2022@gmail.com";
            toast("Opening email client...");
          }}
          className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Contact;
