import { Mail } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CTA from "@/components/cta";
import { teamMembers } from "@/lib/teamMembers";

export const metadata = {
    title: "Our Team | Central Coast Wilds",
    description: "Meet the dedicated team of ecologists, botanists, and restoration specialists behind Central Coast Wilds.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section
                className="relative flex items-center justify-center min-h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://plus.unsplash.com/premium_photo-1663099912596-e8a147973bc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                }}
            >
                <div className="container mx-auto px-6 py-32 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-emerald-300/90">
                        About Us
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                        Our Team
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Meet the dedicated ecologists, botanists, and restoration specialists who make our work possible.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="group p-6 rounded-xl bg-card/50 hover:bg-card hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full  flex items-center justify-center">
                                        <Avatar size="lg">
                                            <AvatarImage src={member.image} />
                                        </Avatar>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{member.name}</h3>
                                        <p className="text-sm text-primary font-medium">{member.role}</p>
                                        <p className="text-xs text-muted-foreground">{member.title}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {member.bio}
                                </p>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-emerald-400 transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                    {member.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />
        </main>
    );
}
