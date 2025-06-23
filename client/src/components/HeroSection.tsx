import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";
import { useState, useEffect, useRef, useCallback } from "react";

export function HeroSection() {
  const [paths, setPaths] = useState({ left: '', right: '' });

  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

  const calculatePaths = useCallback(() => {
    if (containerRef.current && img1Ref.current && img2Ref.current && img3Ref.current && img4Ref.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const r1 = img1Ref.current.getBoundingClientRect();
      const r2 = img2Ref.current.getBoundingClientRect();
      const r3 = img3Ref.current.getBoundingClientRect();
      const r4 = img4Ref.current.getBoundingClientRect();

      const offset = 20;
      const curve = 20;

      // Left path
      const p1x = r1.right - containerRect.left;
      const p1y = r1.top + r1.height / 2 - containerRect.top;
      const p3x = r3.right - containerRect.left;
      const p3y = r3.top + r3.height / 2 - containerRect.top;
      const leftPath = `M ${p1x} ${p1y} H ${p1x + offset} Q ${p1x + offset + curve} ${p1y}, ${p1x + offset + curve} ${p1y + curve} V ${p3y - curve} Q ${p1x + offset + curve} ${p3y}, ${p1x + offset} ${p3y} H ${p3x}`;
      
      // Right path
      const p2x = r2.left - containerRect.left;
      const p2y = r2.top + r2.height / 2 - containerRect.top;
      const p4x = r4.left - containerRect.left;
      const p4y = r4.top + r4.height / 2 - containerRect.top;
      const rightPath = `M ${p2x} ${p2y} H ${p2x - offset} Q ${p2x - offset - curve} ${p2y}, ${p2x - offset - curve} ${p2y + curve} V ${p4y - curve} Q ${p2x - offset - curve} ${p4y}, ${p2x - offset} ${p4y} H ${p4x}`;

      setPaths({ left: leftPath, right: rightPath });
    }
  }, []);

  useEffect(() => {
    calculatePaths();
    window.addEventListener('resize', calculatePaths);
    return () => window.removeEventListener('resize', calculatePaths);
  }, [calculatePaths]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex justify-center items-center text-white" ref={containerRef}>
      {/* Background radial gradients */}
      <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-400/15 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-3/5 h-3/5 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/15 to-transparent"></div>

      {/* Image Connectors */}
      <div className="absolute w-full h-full pointer-events-none">
        <svg className="absolute w-full h-full text-yellow-400/80">
            <path d={paths.left} stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <path d={paths.right} stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>
      
      {/* Images */}
      <div ref={img1Ref} className="absolute top-[20%] left-[15%]">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero1} alt="Web3 Service 1" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img2Ref} className="absolute top-[20%] right-[15%]">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero2} alt="Web3 Service 2" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img3Ref} className="absolute bottom-[20%] left-[15%]">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero3} alt="Web3 Service 3" className="w-full h-full object-cover" />
          </div>
      </div>
      <div ref={img4Ref} className="absolute bottom-[20%] right-[15%]">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-400/50">
              <img src={hero4} alt="Web3 Service 4" className="w-full h-full object-cover" />
          </div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="flex items-center justify-center space-x-4 md:space-x-2">
          <div className="text-right space-y-2">
            <p className="text-lg md:text-xl">Building</p>
            <p className="text-lg md:text-xl">Creating</p>
          </div>

          <div className="flex items-center text-yellow-400/80 mx-2">
            <div className="w-16 h-px bg-current"></div>
            <svg width="10" height="10" viewBox="0 0 10 10" className="inline-block -ml-px">
                <polygon points="0,0 10,5 0,10" fill="currentColor"/>
            </svg>
          </div>

          <div className="bg-yellow-400/10 backdrop-blur-sm shadow-lg rounded-lg px-6 py-3 md:px-8 md:py-4 border border-yellow-400/20">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">Web3</h1>
          </div>

          <div className="flex items-center text-yellow-400/80 mx-2">
             <svg width="10" height="10" viewBox="0 0 10 10" className="inline-block -mr-px transform rotate-180">
                <polygon points="0,0 10,5 0,10" fill="currentColor"/>
            </svg>
            <div className="w-16 h-px bg-current"></div>
          </div>
          
          <div className="text-left space-y-2">
            <p className="text-lg md:text-xl">Products</p>
            <p className="text-lg md:text-xl">Opportunities</p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-lg text-gray-300 px-4">
          Our end-to-end services include ideation, strategy, product development, and education - helping businesses seize the decentralized future with our scalable web3 solutions
        </p>
        <Button asChild className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg px-8 py-3 font-semibold text-lg btn-glow-hover">
          <Link href="/learn-more">Learn More &rarr;</Link>
        </Button>
      </div>
    </div>
  );
}
