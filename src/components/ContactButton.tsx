
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface ContactButtonProps {
  email: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const ContactButton = ({ 
  email, 
  variant = "outline",
  size = "icon",
  className = ""
}: ContactButtonProps) => {
  const handleContact = () => {
    // Simply use the mailto protocol with window.location.href
    // This is the most reliable way to open the default email client
    window.location.href = `mailto:${email}`;
    console.log("Opening email client for:", email);
    toast("Opening email client...");
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleContact}
      className={className}
      title={`Email ${email}`}
    >
      <Mail className="h-5 w-5" />
    </Button>
  );
};

export default ContactButton;
