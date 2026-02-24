import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Contact Us | Central Coast Wilds",
    description: "Get in touch with Central Coast Wilds for ecological consulting, restoration, landscaping, and native plant nursery services.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section
                className="relative flex items-center justify-center min-h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://plus.unsplash.com/premium_photo-1663011532132-f9499fa0dbba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                }}
            >
                <div className="container mx-auto px-6 py-32 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-secondary">
                        Get in Touch
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                        Contact Us
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Ready to start your next ecological project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <MapPin className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Address</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            114 Liberty Street<br />
                                            Santa Cruz, CA 95060
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Phone</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <a href="tel:+18314597955" className="hover:text-emerald-500 transition-colors">(831) 459-7955</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <p className="text-muted-foreground text-sm">
                                            <a href="mailto:sales@centralcoastwilds.com" className="hover:text-emerald-500 transition-colors">sales@centralcoastwilds.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Nursery Visits</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Monday – Thursday, by appointment only<br />
                                            Located on Golf Club Drive, Santa Cruz
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-6 rounded-xl border border-border/40 bg-card/50">
                                <h3 className="font-medium mb-2">Botanical Consultation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Interested in having a horticultural expert assess your property and make native plant recommendations? Email us with your name, phone number, location and property size. Residential yards welcome!
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="consulting">Ecological Consulting</option>
                                        <option value="restoration">Ecological Restoration</option>
                                        <option value="landscaping">Ecological Landscaping</option>
                                        <option value="agriculture">Ecological Agriculture</option>
                                        <option value="nursery">Native Plant Nursery</option>
                                        <option value="soil">Soil Inoculants</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
