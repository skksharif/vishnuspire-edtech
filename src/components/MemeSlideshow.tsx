import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const memes = [
  "/memes/aiml.jpg",
  "/memes/appdev.jpg",
  "/memes/cloud.jpg",
  "/memes/data.jpg",
  "/memes/excel.jpg",
  "/memes/flutter.jpg",
  "/memes/fullstack.jpg",
  "/memes/mobdev.jpg",
  "/memes/powerbi.jpg",
  "/memes/uiux.jpg",
];

const MemeSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState(""); // Track transition direction

  // Auto-slide every 3 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDirection("next");
      setCurrent((prev) => (prev + 1) % memes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + memes.length) % memes.length);
  }, []);

  const handleNext = useCallback(() => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % memes.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setDirection("prev");
        handlePrev();
      }
      if (e.key === "ArrowRight") {
        setDirection("next");
        handleNext();
      }
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      setDirection("next");
      handleNext();
    }
    if (distance < -minSwipeDistance) {
      setDirection("prev");
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 md:px-6">
      <div className="flex items-center justify-center">
        {/* Left decorative panel (visible on PC, hidden on mobile) */}
        <div className="hidden md:block w-1/3 max-w-xs p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-l-2xl shadow-lg">
          <div className="text-green-700 text-sm font-medium italic leading-relaxed">
            <p className="font-semibold text-base">Tech Meme Collection</p>
            <p className="mt-3">Laugh out loud with our curated tech-inspired memes!</p>
          </div>
        </div>

        {/* Slideshow container */}
        <div className="w-full max-w-[400px] p-5 bg-green-50 rounded-2xl shadow-xl">
          {memes.length === 0 ? (
            <div className="text-center text-green-600 font-medium">No memes available</div>
          ) : (
            <>
              <div
                className="relative w-full overflow-hidden rounded-xl aspect-square"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  key={current} // Force re-render for animation
                  src={memes[current]}
                  alt={`Meme ${current + 1}`}
                  className={`w-full h-full object-contain transition-all duration-500 ease-in-out ${
                    direction === "next"
                      ? "animate-slide-in-right"
                      : direction === "prev"
                      ? "animate-slide-in-left"
                      : "animate-fade-in"
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.jpg"; // Fallback image
                  }}
                />
                <div
                  className="absolute inset-0 bg-green-100 animate-pulse"
                  style={{ display: memes[current] ? "none" : "block" }}
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-green-100 rounded-full hover:bg-green-200 focus:ring-2 focus:ring-green-500 focus:outline-none disabled:opacity-50 transition-colors duration-200"
                  aria-label="Previous meme"
                  disabled={memes.length <= 1}
                >
                  <ChevronLeft className="w-6 h-6 text-green-700" />
                </button>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlayPause}
                    className="p-3 bg-green-100 rounded-full hover:bg-green-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors duration-200"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-green-700" />
                    ) : (
                      <Play className="w-5 h-5 text-green-700" />
                    )}
                  </button>
                  <span className="text-green-700 font-medium text-sm">
                    Meme {current + 1} of {memes.length}
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 bg-green-100 rounded-full hover:bg-green-200 focus:ring-2 focus:ring-green-500 focus:outline-none disabled:opacity-50 transition-colors duration-200"
                  aria-label="Next meme"
                  disabled={memes.length <= 1}
                >
                  <ChevronRight className="w-6 h-6 text-green-700" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right decorative panel (visible on PC, hidden on mobile) */}
        <div className="hidden md:block w-1/3 max-w-xs p-6 bg-gradient-to-l from-green-50 to-green-100 rounded-r-2xl shadow-lg">
          <div className="text-green-700 text-sm font-medium italic leading-relaxed">
            <p className="font-semibold text-base">More Memes Await!</p>
            <p className="mt-3">Swipe or click to uncover the next tech gem!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeSlideshow;