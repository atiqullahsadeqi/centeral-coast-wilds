'use client';

import { articles } from "@/lib/articles";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Share2, Printer } from "lucide-react";

export default function ArticleDetailPage() {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col pt-16">
                <main className="flex-grow flex items-center justify-center bg-[#fdfbf6]">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <Link href="/articles" className="text-[#789d6a] font-bold underline">
                            Return to Articles
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col pt-16">

            <main className="flex-grow bg-[#fdfbf6]">
                {/* Article Header */}
                <section className="bg-white border-b">
                    <div className="container mx-auto px-6 py-12">
                        <Link
                            href="/articles"
                            className="inline-flex items-center text-gray-500 hover:text-[#789d6a] transition-colors mb-8 text-sm font-medium group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Articles
                        </Link>

                        <div className="max-w-4xl">
                            <span className="bg-[#789d6a] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 inline-block">
                                {article.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-[#1a2e1a] mb-8 leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{article.date}</span>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                <span>By Central Coast Wilds Team</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            {/* Featured Image */}
                            <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                {/* Content */}
                                <div className="lg:col-span-8">
                                    <div
                                        className="prose prose-lg max-w-none prose-headings:text-[#1a2e1a] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-[#1a2e1a] prose-italic:text-[#789d6a]"
                                        dangerouslySetInnerHTML={{ __html: article.content }}
                                    />

                                    <div className="mt-16 pt-8 border-t flex flex-wrap gap-4 items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#789d6a] transition-colors">
                                                <Share2 size={18} />
                                                Share Article
                                            </button>
                                            <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#789d6a] transition-colors">
                                                <Printer size={18} />
                                                Print
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4 space-y-12">
                                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                        <h4 className="text-lg font-bold text-[#1a2e1a] mb-6">Related Articles</h4>
                                        <div className="space-y-6">
                                            {articles.filter(a => a.slug !== article.slug).slice(0, 3).map(related => (
                                                <Link
                                                    key={related.slug}
                                                    href={`/articles/${related.slug}`}
                                                    className="group block"
                                                >
                                                    <p className="text-xs font-bold text-[#789d6a] uppercase tracking-widest mb-1">
                                                        {related.category}
                                                    </p>
                                                    <h5 className="text-sm font-bold text-[#1a2e1a] group-hover:text-[#789d6a] transition-colors line-clamp-2">
                                                        {related.title}
                                                    </h5>
                                                </Link>
                                            ))}
                                        </div>
                                        <Link
                                            href="/articles"
                                            className="inline-block mt-8 text-sm font-bold text-[#789d6a] hover:underline"
                                        >
                                            View all articles
                                        </Link>
                                    </div>

                                    <div className="bg-[#1a2e1a] p-8 rounded-3xl text-white">
                                        <h4 className="text-xl font-bold mb-4">Want more insights?</h4>
                                        <p className="text-green-100/70 text-sm mb-6">
                                            Subscribe to our newsletter for seasonal guides and native plant news.
                                        </p>
                                        <Link href="/#newsletter">
                                            <button className="w-full bg-[#789d6a] hover:bg-[#5a7a4f] text-white font-bold py-3 rounded-xl transition-colors">
                                                Subscribe Now
                                            </button>
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
