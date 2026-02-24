'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Mission() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Parallax effect for the image
    gsap.to(".mission-image", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Staggered text reveal
    gsap.from(".reveal-text", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#152414] py-24 md:py-32 overflow-hidden text-white"
    >
      {/* Subtle Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: The "Immersive" Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1648657470112-39b0dd3f1a83?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              quality={100} // Replace with your image
              alt="Our Mission"
             
              fill
              className="mission-image object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152414] via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#89ad79] p-8 rounded-2xl shadow-2xl hidden md:block">
            <p className="text-4xl font-bold">30+</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Years in Santa Cruz</p>
          </div>
        </div>

        {/* Right Side: The Story */}
        <div ref={textRef} className="lg:col-span-7 lg:pl-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[#89ad79] text-[#89ad79] text-sm font-semibold mb-6 reveal-text">
            Established 1992
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight reveal-text">
            Reversing species extinction through <span className="text-[#89ad79] italic">ecological principles.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed reveal-text">
            <p>
              Central Coast Wilds (CCW) is more than a nursery. We are a design-grow-build contractor 
              dedicated to the natural beauty of the Western U.S. bioregions.
            </p>
            <p>
              Motivated by the continuing loss of biodiversity, our mission is to reverse 
              desertification and species loss through science-based land-use planning 
              and native plant management.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 reveal-text">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#89ad79]" />
              <span className="text-sm font-medium uppercase tracking-tighter">Watershed Restoration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#89ad79]" />
              <span className="text-sm font-medium uppercase tracking-tighter">Invasive Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#89ad79]" />
              <span className="text-sm font-medium uppercase tracking-tighter">Soil Health</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}