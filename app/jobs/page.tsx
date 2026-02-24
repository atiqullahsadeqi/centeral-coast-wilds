import { Briefcase, MapPin, Leaf, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Job Opportunities | Central Coast Wilds",
    description: "Join our team of ecologists, botanists, and restoration specialists at Central Coast Wilds in Santa Cruz, California.",
};

export default function JobsPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section
                className="relative flex items-center justify-center min-h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1740&auto=format&fit=crop)`
                }}
            >
                <div className="container mx-auto px-6 py-32 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-secondary">
                        Careers
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                        Job Opportunities
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Join a team dedicated to restoring California's native ecosystems.
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="pb-24 bg-background">
                <div className="container mx-auto px-6 py-12 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
                    <div className="grid sm:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 rounded-xl border border-border/40 bg-card/50 text-center">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                                <Leaf className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="font-semibold mb-2">Meaningful Impact</h3>
                            <p className="text-sm text-muted-foreground">
                                Your work directly restores California's native habitats and protects endangered species.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border border-border/40 bg-card/50 text-center">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="font-semibold mb-2">Beautiful Location</h3>
                            <p className="text-sm text-muted-foreground">
                                Based in Santa Cruz, surrounded by redwoods, coast, and the Pogonip Open Space Preserve.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border border-border/40 bg-card/50 text-center">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="font-semibold mb-2">Growth & Learning</h3>
                            <p className="text-sm text-muted-foreground">
                                Work alongside experienced ecologists and gain hands-on field experience.
                            </p>
                        </div>
                    </div>

                    {/* Types of Positions */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Areas We Hire For</h2>
                    <div className="space-y-4 mb-16">
                        {[
                            { title: "Restoration Field Crew", description: "Hands-on work in habitat restoration including invasive species removal, native planting, erosion control, and site maintenance across central coast ecosystems." },
                            { title: "Nursery & Propagation", description: "Growing watershed-specific native plants, seed collection, propagation, and nursery operations at our two-acre facility in Santa Cruz." },
                            { title: "Ecological Consulting", description: "Botanical surveys, habitat assessments, ecological monitoring, and compliance reporting for federal, state and local permits." },
                            { title: "Project Management", description: "Planning and overseeing restoration projects from design through long-term maintenance, coordinating with clients and field crews." },
                            { title: "Seasonal & Internship Positions", description: "We sponsor students from UC Santa Cruz, San Jose State University, Monterey Bay State University, and Cabrillo Community College for research and field experience." },
                        ].map((position) => (
                            <div
                                key={position.title}
                                className="p-6 rounded-xl border border-border/40 bg-card/50 hover:border-emerald-500/30 transition-all duration-200"
                            >
                                <h3 className="font-semibold text-lg mb-2">{position.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{position.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* How to Apply */}
                    <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center">
                        <div className="absolute top-[-10%] right-[-5%] opacity-10">
                            <Leaf size={300} className="text-white rotate-12" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">How to Apply</h2>
                        <p className="text-white/70 mb-6 max-w-xl mx-auto leading-relaxed">
                            To inquire about current openings or submit your resume, please contact us by email. Include your area of interest, experience, and availability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-primary">
                                <a href="mailto:sales@centralcoastwilds.com?subject=Job%20Inquiry">
                                    <Send className="mr-2 h-4 w-4" /> Email Your Resume
                                </a>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="text-secondary hover:underline">
                                <Link href="/about/team">
                                    Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
