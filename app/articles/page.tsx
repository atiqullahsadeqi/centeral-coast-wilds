'use client';

import { articles } from "@/lib/articles";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CATEGORIES = ["All", "Restoration", "Plant Spotlight", "Landscaping", "Education"];

export default function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredArticles = articles.filter(article => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            activeCategory === "All" || article.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen flex flex-col ">

            <main className="flex-grow">
                {/* Banner */}
                <section className="bg-[#1a2e1a] py-20 text-white">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles & Insights</h1>
                        <p className="text-green-100/80 text-xl max-w-2xl">
                            Knowledge and stories from the heart of California's native ecosystems.
                        </p>
                    </div>
                </section>

                {/* Search and Filters */}
                <section className="py-12 border-b bg-white">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                className="pl-10 border-gray-200 focus:none focus:border-primary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-1.5 cursor-pointer rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === activeCategory
                                            ? "bg-[#789d6a] text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="py-20 ">
                    <div className="container mx-auto px-6">
                        {filteredArticles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                {filteredArticles.map((article) => (
                                    <article
                                        key={article.slug}
                                        className="group bg-white rounded-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                                    >
                                        <Link href={`/articles/${article.slug}`} className="relative h-64 overflow-hidden">
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

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>

                                            <h3 className="text-md font-bold text-primary mb-3 line-clamp-2 leading-tight group-hover:text-primary/80 transition-colors">
                                                <Link href={`/articles/${article.slug}`}>
                                                    {article.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                                {article.excerpt}
                                            </p>

                                            <Link href={`/articles/${article.slug}`} className="inline-flex items-center text-[#789d6a] font-bold text-sm group-hover:gap-2 transition-all">
                                                Read More
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                    className="mt-4 text-[#789d6a] font-semibold underline"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
