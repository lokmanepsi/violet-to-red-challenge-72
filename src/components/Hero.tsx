import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";
import DecorativeSticker from "./DecorativeSticker";
import ImageCollage from "./ImageCollage";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
                    Violet
                  </span>
                  <span className="inline-block px-4 py-2 border-2 border-foreground/20 rounded-lg font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
                    to
                  </span>
                  <span className="inline-block px-6 py-2 rounded-full bg-accent text-accent-foreground font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
                    Red
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block px-4 py-2 border-2 border-foreground/10 rounded-lg font-display text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                    Photo
                  </span>
                  <span className="inline-block px-4 py-2 border-2 border-foreground/10 rounded-lg font-display text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                    Challenge
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                A weekly photography challenge built on limits, creativity, and vision.
                <br />
                <span className="font-medium text-foreground">One mission. One frame. One angle.</span>
              </p>

              {/* CTA */}
              <Button
                onClick={() => setIsModalOpen(true)}
                className="gradient-violet-red hover:opacity-90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                Join the Challenge
              </Button>
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Decorative Sticker */}
              <DecorativeSticker />
              
              {/* Image Collage */}
              <div className="absolute bottom-0 left-0 lg:left-auto lg:right-20 lg:bottom-20">
                <ImageCollage />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
