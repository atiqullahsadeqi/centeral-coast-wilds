"use client";

import { Service } from "@/lib/services";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "./cta";

interface ServicePageProps {
    service: Service;
}

export default function ServicePage({ service }: ServicePageProps) {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative flex items-center justify-center min-h-[50vh] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${service.image})` }}
            >
                <div className="container mx-auto px-6 py-32 text-center text-white relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-secondary">
                        {service.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    {service.sections.map((section, index) => (
                        <div
                            key={index}
                            className={`mb-12 ${index !== service.sections.length - 1 ? "pb-12 border-b border-border/40" : ""}`}
                        >
                            {section.heading && (
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                                    {section.heading}
                                </h2>
                            )}
                            <div
                                className="prose prose-lg dark:prose-invert max-w-none
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-headings:text-foreground"
                                dangerouslySetInnerHTML={{ __html: section.body }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </main>
    );
}
