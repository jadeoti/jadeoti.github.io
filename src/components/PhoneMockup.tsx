import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhoneMockupProps {
  images: string[];
  alt: string;
}

export const PhoneMockup = ({ images, alt }: PhoneMockupProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center">
      {/* Phone Frame */}
      <div className="relative w-[180px] md:w-[220px]">
        {/* Phone Body */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-xl z-10" />
          
          {/* Screen */}
          <div className="relative bg-slate-950 rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent z-10" />
            
            {/* Image Carousel */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${alt} - Screen ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
        </div>
        
        {/* Side Button */}
        <div className="absolute right-0 top-20 w-0.5 h-8 bg-slate-700 rounded-l" />
        <div className="absolute left-0 top-16 w-0.5 h-6 bg-slate-700 rounded-r" />
        <div className="absolute left-0 top-24 w-0.5 h-10 bg-slate-700 rounded-r" />
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-4"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={goToNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
