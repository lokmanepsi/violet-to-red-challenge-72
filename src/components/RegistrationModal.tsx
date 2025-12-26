import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    challengeAccount: "",
    contact: "",
    personalAccount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.challengeAccount || !formData.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description: "Welcome to the Violet to Red challenge.",
    });
    
    setFormData({ challengeAccount: "", contact: "", personalAccount: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X size={20} className="text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-semibold mb-2">
            Join the <span className="text-gradient">Challenge</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Register to participate in Violet to Red
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="challengeAccount" className="text-sm font-medium">
              Challenge Instagram Account <span className="text-accent">*</span>
            </Label>
            <Input
              id="challengeAccount"
              placeholder="@your_challenge_account"
              value={formData.challengeAccount}
              onChange={(e) => setFormData({ ...formData, challengeAccount: e.target.value })}
              className="rounded-xl border-border/60 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="text-sm font-medium">
              Email or Phone <span className="text-accent">*</span>
            </Label>
            <Input
              id="contact"
              placeholder="email@example.com or +213..."
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="rounded-xl border-border/60 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="personalAccount" className="text-sm font-medium text-muted-foreground">
              Personal Instagram (optional)
            </Label>
            <Input
              id="personalAccount"
              placeholder="@your_personal_account"
              value={formData.personalAccount}
              onChange={(e) => setFormData({ ...formData, personalAccount: e.target.value })}
              className="rounded-xl border-border/60 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <Button
            type="submit"
            className="w-full gradient-violet-red hover:opacity-90 text-primary-foreground rounded-xl py-6 font-medium text-base transition-all duration-300"
          >
            Submit Registration
          </Button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By registering, you agree to the challenge rules.
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
