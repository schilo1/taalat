"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="min-h-[85vh] md:h-screen relative flex items-center justify-center overflow-hidden bg-warm-black">
      {/* Video Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dzhkssyry/video/upload/v1770388264/Taalat_uttzy9.jpg"
          className="w-[95%] h-[75%] md:w-full md:h-full object-contain md:object-cover"
        >
          <source
            src="https://res.cloudinary.com/dzhkssyry/video/upload/v1770388264/Taalat_uttzy9.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-warm-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-transparent to-warm-black/50" />
      </div>

      {/* Red Accent Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary-red hidden lg:block" />

      {/* Content */}
      <div className="text-center z-10 px-4">
        <div className="inline-block border border-gold/40 px-6 py-2 mb-8 animate-fade-in-up-delay-1">
          <span className="font-montserrat text-xs tracking-[4px] uppercase text-gold">
            Établi depuis 2010
          </span>
        </div>

        <h1
          className="font-parisienne text-6xl md:text-8xl lg:text-9xl font-normal text-white leading-none mb-6 animate-fade-in-up-delay-2"
          style={{
            textShadow: "2px 2px 0 #C41E3A, 4px 4px 0 rgba(196, 30, 58, 0.3)",
          }}
        >
          Chez Taalat
        </h1>

        <a
          href="#menu"
          className="inline-block font-montserrat text-xs tracking-[3px] uppercase px-10 py-4 bg-primary-red text-white hover:bg-white hover:text-primary-red transition-all duration-300 animate-fade-in-up-delay-5"
        >
          Découvrir
        </a>
      </div>

      {/* Bouton Son - Positioned higher on mobile */}
      <button
        onClick={toggleMute}
        className="absolute bottom-16 right-4 md:bottom-8 md:right-8 z-20 p-2.5 md:p-3 bg-warm-black/50 hover:bg-warm-black/80 border border-gold/40 text-gold transition-all duration-300 group backdrop-blur-sm"
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-black to-transparent pointer-events-none" />
    </section>
  );
}
