import { Button } from "./ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="pb-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="relative max-w-4xl mx-auto overflow-hidden bg-primary rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center">
                    {/* Subtle Background Decoration */}
                    <div className="absolute top-[-10%] right-[-5%] opacity-10">
                        <Leaf size={300} className="text-white rotate-12" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Work With Us</h2>
                    <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Interested in joining our team or partnering on a project?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/80">
                            <Link href="/contact">
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="lg" className="text-secondary hover:underline">
                            <Link href="/jobs">
                                Job Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}