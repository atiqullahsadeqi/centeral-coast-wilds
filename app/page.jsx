"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

import { ArrowRight } from 'lucide-react';
import Link from "next/link";

import { Input } from "@/components/ui/input"
import { Leaf } from "lucide-react"

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesList = [
  {
    title: "Ecological Consulting",
    image_link: "https://images.unsplash.com/photo-1763228027600-cbfd39fe422b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    link: "/services/consulting"
  },
  {
    title: "Ecological Restoration",
    image_link: "https://images.unsplash.com/photo-1759325906183-6b80895b6795?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/services/restoration"
  },
  {
    title: "Ecological Landscaping",
    image_link: "https://images.unsplash.com/photo-1761958151634-2faec6ce4d9a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/services/landscaping"
  },
  {
    title: "Ecological Agriculture",
    image_link: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/services/agriculture"
  },
  {
    title: "Horticultural Services",
    image_link: "https://images.unsplash.com/photo-1612680694307-e00979cc752f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/services/horticulture"
  },
  {
    title: "Biological Soil Inoculants",
    image_link: "https://images.unsplash.com/photo-1703788359370-56c4d4c69bd9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nursery/soil-inoculants"
  },
  {
    title: "Restoration Projects",
    image_link: "https://images.unsplash.com/photo-1769613637793-1d497f0fedf0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects"
  },
  {
    title: "Research",
    image_link: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    link: "/research"
  },
];

export default function HomePage() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

    // 1. Initial State: Hide everything to prevent flickering
    gsap.set(".animate-item", { opacity: 0, y: 30 });
    gsap.set(".hero-image", { opacity: 0, scale: 1.1, filter: "blur(10px)" });
    gsap.set(".branch-bg", { opacity: 0, x: 50 });

    // 2. The Animation Sequence
    tl.to(".branch-bg", { opacity: 1, x: 0, duration: 2 })
      .to(".animate-item", { 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, // Smoothly delay each text element
      }, "-=1.5")
      .to(".hero-image", { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)", 
        stagger: 0.2,
        duration: 1.5 
      }, "-=1.2");
      
  }, { scope: heroRef });

  useEffect(() => {
    // GSAP Context for easy cleanup in React
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      // Calculate how far the container needs to move to the left
      const getScrollAmount = () => {
        let containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth + 100); // 100px padding
      };

      // 1. The Horizontal Scroll Animation (Pinned)
      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1, // Smooth scrubbing (1 second delay to catch up)
          end: () => `+=${getScrollAmount() * -1}`, // The length of the scroll matches the width
          invalidateOnRefresh: true, // Recalculates on window resize
        }
      });

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
            containerAnimation: tween, // Ties this trigger to the horizontal movement
            start: "left right-=100", // Triggers when the card's left edge gets near the right side of the screen
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="min-h-screen relative overflow-hidden">
      {/* Background Branch */}
      <Image
        src="/images/tree-branch.png"
        alt="Background"
        quality={100}
        className="branch-bg absolute right-0 top-1/2 -translate-y-1/2 hidden md:block z-10"
        width={606}
        height={412}
      />

      <div className="container px-4 md:px-0 py-8 md:py-0 min-h-screen mx-auto grid grid-cols-1 md:grid-cols-6 items-center gap-6 md:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-3 flex flex-col gap-6 justify-evenly md:min-h-screen">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="animate-item text-3xl md:text-5xl leading-tight font-bold w-full md:max-w-xl">
              Preserving California’s Biodiversity Since 1992.
            </h1>
            <p className="animate-item max-w-xl text-muted-foreground">
              We are a design-grow-build firm dedicated to reversing species extinction and restoring the natural beauty of the Western U.S. through ecological principles.
            </p>
            <div className="animate-item">
              <Button variant="default" size="lg">Our Services</Button>
            </div>
          </div>
          
          <div className="hero-image hidden md:block overflow-hidden rounded-md">
            <Image 
              src="https://images.unsplash.com/photo-1758273705890-204fdc2518fa?q=80&w=1631&auto=format&fit=crop" 
              alt="Plant" 
              width={400} 
              height={200} 
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Middle Column: Tall Image */}
        <div className="md:col-span-2 hero-image">
          <Image 
            src="https://images.unsplash.com/photo-1673853233647-17ebc2d71b5f?q=80&w=687&auto=format&fit=crop" 
            alt="Plant" 
            className="rounded-md object-cover w-full h-auto" 
            width={400} 
            height={200} 
          />
        </div>

        {/* Right Column: Location & Stats */}
        <div className="md:min-h-screen flex flex-col justify-evenly">
          <div className="animate-item flex flex-col items-start md:items-end">
            <p className="text-muted-foreground">USA, <strong className="text-primary">California</strong></p>
            <Button variant="link" className="cursor-pointer pl-0 md:pr-0">See on the map</Button>
          </div>

          <div className="animate-item bg-secondary py-8 rounded-md">
            <AvatarGroup className="grayscale items-center justify-center mb-4">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/maxleiter.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <div className="text-center">
              <p className="text-2xl font-bold">30+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Mission */}
      <div className="w-full bg-secondary py-16 min-h-[400px]">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-8 md:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <h2 className="text-5xl font-bold">Our Mission</h2>


            <p className="text-lg font-bold mt-6 md:mt-0">Central Coast Wilds (CCW), a division of Ecological Concerns Incorporated, is a design-grow-build ecological landscape contractor and California native plant nursery established in 1992 in Santa Cruz, California.

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <Image src="https://images.unsplash.com/photo-1758524053117-55f26985d5a3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Plant" className="rounded-md mt-6" width={600} height={200} />
            </div>
            <div>
              <p className="text-muted-foreground mt-6 md:mt-0 text-xs md:text-md leading-relaxed">Our work is motivated by the continuing loss of biodiversity, native species extinction, and the desertification of Western U.S. bioregions. We believe that these trends can be reversed through the application of ecological principles to land-use planning and management.

                CCW provides services for residential, commercial and public works clients throughout the Monterey and San Francisco bay areas. Our specialties include ecological landscapes, habitat restoration and California native plants. Our landscape team has broad experience in ecological soil and pest management, integrated water management, invasive plant control and watershed restoration. Our nursery team provides custom grown native plants and horticultural consultations for landscape and habitat restoration projects of all sizes.

                Whether your project is a home landscape renovation, a large commercial installation, creating a regional open space plan, or you simply need guidance in identifying and selecting native plants for beneficial insect attraction or erosion control, Central Coast Wilds is ready and able to meet your native plant needs.
                Whether your project is a home landscape renovation, a large commercial installation, creating a regional open space plan, or you simply need guidance in identifying and selecting native plants for beneficial insect attraction or erosion control, Central Coast Wilds is ready and able to meet your native plant needs.</p>
            </div>
          </div>

        </div>
      </div>
      {/* Services */}
      <section
        ref={sectionRef}
        className="relative flex flex-col h-screen w-full overflow-hidden bg-white text-slate-900 justify-center"
      >
        {/* Pinned Heading */}
        <div className="absolute top-20 left-0 w-full px-10 md:px-20 z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-left  mx-auto">
            Restoration <br /> & <br /> Design Services
          </h2>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div
          ref={containerRef}
          className="flex gap-8 px-10 md:px-20 mt-32 w-max"
        >

          {servicesList.map((item, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative min-w-[320px] md:min-w-[400px] h-[450px] rounded-3xl overflow-hidden bg-slate-100 group shadow-lg"
            >
              {/* Use item.image_link */}
              <img
                src={item.image_link}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                {item.title}
              </div>

              {/* Use item.link */}
              <Link href={item.link}>
                <button className="absolute bottom-6 left-6 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors shadow-md">
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
      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden bg-[#1a2e1a] rounded-[2.5rem] p-8 md:p-16 shadow-2xl">

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
                  className="h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-8 transition-all duration-300"
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
