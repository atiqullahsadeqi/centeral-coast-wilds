'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/articles';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ArticlesSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Reveal heading
        gsap.from(".articles-heading", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Staggered card reveal
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl articles-heading">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4">
                            Native Insights & News
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore our latest articles on ecological restoration, native plant care, and environmental stewardship.
                        </p>
                    </div>
                    <Link href="/articles" className="articles-heading">
                        <Button variant="default" className="rounded-full cursor-pointer">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {articles.slice(0, 4).map((article, index) => (
                        <div
                            key={article.slug}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/40 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl"
                        >
                            <Link href={`/articles/${article.slug}`} className="relative h-56 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#789d6a] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                    <Calendar size={14} />
                                    <span>{article.date}</span>
                                </div>

                                <h3 className="text-md font-bold text-primary mb-3 line-clamp-2 leading-tight group-hover:text-primary/80 transition-colors">
                                    <Link href={`/articles/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                    {article.excerpt}
                                </p>

                                <Link href={`/articles/${article.slug}`} className="inline-flex items-center text-[#789d6a] font-semibold text-sm hover:gap-2 transition-all">
                                    Read Full Article
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
