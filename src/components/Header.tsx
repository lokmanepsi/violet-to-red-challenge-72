import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-violet-red" />
              <span className="font-display text-lg font-semibold tracking-tight">V→R</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                className="border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => scrollToSection("hero")}
              >
                Discover
              </Button>
              <Button
                variant="outline"
                className="border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => scrollToSection("rules")}
              >
                Rules
              </Button>
              <Button
                variant="outline"
                className="border-foreground/20 hover:border-accent hover:text-accent transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Sign In
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full justify-center border-foreground/20"
                onClick={() => scrollToSection("hero")}
              >
                Discover
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center border-foreground/20"
                onClick={() => scrollToSection("rules")}
              >
                Rules
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center border-foreground/20"
                onClick={() => setIsModalOpen(true)}
              >
                Sign In
              </Button>
            </nav>
          )}
        </div>
      </header>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
