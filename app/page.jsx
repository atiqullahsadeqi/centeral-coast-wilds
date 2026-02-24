"use client";

import { useEffect, useRef } from "react";
import Mission from "@/components/mission";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button"


import { ArrowRight } from 'lucide-react';
import Link from "next/link";

import { Input } from "@/components/ui/input"
import { Leaf } from "lucide-react"
import ArticlesSection from "@/components/articles-section";

import { services } from "@/lib/services";

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



export default function HomePage() {

  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP Context for easy cleanup in React
    let ctx = gsap.context(() => {







      // 2. The "Fade Up" Animation for individual cards
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.from(card, {
          y: 80, // Start 80px lower
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            // containerAnimation: tween, // Ties this trigger to the horizontal movement
            start: "top bottom-=100n", // Triggers when the card's left edge gets near the right side of the screen
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

    tl.from(".hero-bg", {
      scale: 1.1,
      duration: 2,
      ease: "power2.out"
    })
      .from(".hero-content", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
      }, "-=1.5") // Starts 1.5s before previous animation ends
      .from(".hero-title-large", {
        x: 60,
        opacity: 0,
        duration: 1.5,
      }, "-=1.2")
      .from(".glass-card", {
        y: 30,
        opacity: 0,
        backdropFilter: "blur(0px)",
        duration: 1
      }, "-=1");

  }, { scope: heroRef });


  return (

    <main className="min-h-screen">

      {/* Hero Section */}
      <div ref={heroRef} className="w-full h-[calc(100vh-80px)] p-0 md:p-6 mt-0 md:-mt-5 overflow-hidden">
        <div className="hero-bg w-full h-full bg-[url(https://images.unsplash.com/photo-1746982080595-ecf9847e2e99?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rounded-none md:rounded-4xl overflow-hidden relative">

          {/* Overlay with grid */}
          <div className="w-full h-full bg-black/30 md:bg-transparent grid grid-cols-1 md:grid-cols-3 p-4 md:p-12 relative z-10">

            <div className="flex flex-col justify-between">
              <div className="hero-content">
                <h1 className="text-3xl md:text-6xl font-bold text-white text-shadow-xl mt-6">
                  Native plants make a <br /> positive impact <br /> on your environment.
                </h1>
                <Link href="/appointment">
                  <Button variant="link" className="w-fit mt-4 text-lg text-white underline p-0">
                    Book Appointment <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="glass-card bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="h-24 w-24 bg-white rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://centralcoastwilds.com/images/2022-CCW-30-year-anniversary.png"
                      alt="Plant"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm mb-4 text-white font-medium">
                      Provide your landscapes with watershed-specific native plants and let our ecological team keep them flourishing.
                    </p>
                    <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} variant="default" size="lg" className="w-fit  text-whtiehover:bg-white/90 cursor-pointer">
                      Services <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col justify-end items-end col-span-2">
              <h1 className="hero-title-large text-2xl md:text-9xl text-white max-w-3xl text-right text-shadow-lg leading-tight">
                <span className="font-bold">Central</span> <br /> Coast Wilds
              </h1>
            </div>

          </div>
        </div>
      </div>
      {/* Mission */}

      <Mission />
      {/* Services */}
      <section
        id="services"
        ref={sectionRef}
        className="py-10 md:py-20 relative flex flex-col gap-10 min-h-[80vh] container mx-auto overflow-hidden  text-slate-900 justify-center"
      >
        {/* Pinned Heading */}
        <div className=" w-full px-10 md:px-20 z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-5  mx-auto">
            Restoration & Design Services
          </h2>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div
          ref={containerRef}
          className="flex gap-8 px-5 md:px-20  grid grid-cols-1 md:grid-cols-4"
        >

          {services.map((item, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative min-w-[320px] h-[370px] rounded-3xl bg-black overflow-hidden  group shadow-lg"
            >
              {/* Use item.image_link */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                {item.title}
              </div>

              {/* Use item.link */}
              <Link href={item.link}>
                <button className="absolute bottom-6 left-6 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-secondary transition-colors shadow-md">
                  Explore more
                  <div className="bg-white text-black rounded-full p-0.5">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Articles Section */}
      <ArticlesSection />

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-8 md:p-16 shadow-2xl">

            {/* Subtle Background Decoration */}
            <div className="absolute top-[-10%] right-[-5%] opacity-10">
              <Leaf size={300} className="text-white rotate-12" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Grow with us.
              </h2>
              <p className="text-green-100/80 text-lg mb-10">
                Join our community for seasonal planting guides, ecological restoration updates,
                and exclusive first access to our native plant sales.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-green-200/50 focus-visible:ring-green-400 rounded-full px-6"
                  required
                />
                <Button
                  type="submit"
                  className="cursor-pointer h-12 bg-secondary hover:bg-secondary/80 text-primary font-semibold rounded-full px-8 transition-all duration-300"
                >
                  Subscribe
                </Button>
              </form>

              <p className="mt-6 text-xs text-green-200/40">
                By subscribing, you agree to our Privacy Policy. No spam, just nature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
