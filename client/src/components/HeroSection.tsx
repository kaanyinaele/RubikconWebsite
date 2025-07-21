import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";
import heroWallpaper from "@/assets/images/herowallpaper.png";
import { useState, useEffect, useRef, useCallback } from "react";

export function HeroSection() {
  const [paths, setPaths] = useState({ left: '', right: '' });

  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

 

  

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex justify-center items-center text-white p-4" 
      ref={containerRef}
      style={{
        backgroundImage: `url(${heroWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-400/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/20 to-transparent blur-3xl"></div>

      <div className="hidden md:block absolute w-full h-full pointer-events-none">
        <svg className="absolute w-full h-full text-yellow-400/80">
            <path d={paths.left} stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <path d={paths.right} stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>
      
      <div ref={img1Ref} className="hidden md:block absolute top-[15%] left-[10%]">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero1} alt="Web3 Service 1" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img2Ref} className="hidden md:block absolute top-[15%] right-[10%]">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero2} alt="Web3 Service 2" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img3Ref} className="hidden md:block absolute bottom-[15%] left-[20%]">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero3} alt="Web3 Service 3" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img4Ref} className="hidden md:block absolute bottom-[15%] right-[20%]">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero4} alt="Web3 Service 4" className="w-full h-full object-cover" />
          </div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-right space-y-2">
            <p className="text-lg md:text-xl">Building</p>
            <p className="text-lg md:text-xl">Products</p>
          </div>

          <div className="flex items-center text-yellow-400/80">
            <div className="w-12 h-px bg-current"></div>
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-yellow-400/80"></div>
          </div>

          <div className="bg-yellow-400/10 backdrop-blur-md shadow-lg rounded-2xl px-8 py-4 border border-yellow-400/30">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-300">
              <span className="particle-text">
                {'RUBIKCON'.split('').map((char, index) => {
                  const tx = `${Math.random() * 200 - 100}px`;
                  const ty = `${Math.random() * 200 - 100}px`;
                  return (
                    <span 
                      key={index} 
                      className="particle-char inline-block"
                      style={{
                        '--tx': tx,
                        '--ty': ty,
                        opacity: 0,
                        display: 'inline-block',
                        willChange: 'transform, opacity'
                      } as React.CSSProperties}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            </h1>
          </div>

          <div className="flex items-center text-yellow-400/80">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-yellow-400/80"></div>
            <div className="w-12 h-px bg-current"></div>
          </div>
          
          <div className="text-left space-y-2">
            <p className="text-lg md:text-xl">Creating</p>
            <p className="text-lg md:text-xl">Opportunities</p>
          </div>
        </div>
        <p className="mt-8 max-w-xl text-lg text-gray-300">
          Our end-to-end services include ideation, strategy, product development, and education - helping businesses seize the decentralized future with our scalable web3 solutions
        </p>
        <Button asChild className=" hover:scale-105 transition-all duration-300 mt-8 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg px-8 py-3 font-semibold text-lg btn-glow-hover">
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
