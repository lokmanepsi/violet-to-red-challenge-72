import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <Instagram size={20} />
            </a>
            {/* Space for future social links */}
          </div>

          {/* Location */}
          <p className="text-muted-foreground text-sm">
            Algeria
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-xs text-center">
            © {new Date().getFullYear()} Violet to Red — Photography Challenge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
