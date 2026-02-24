import { CalendarDays, Clock, Mail, Phone, MapPin, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Book Appointment | Central Coast Wilds",
    description: "Schedule a nursery visit, botanical consultation, or plant pickup appointment with Central Coast Wilds in Santa Cruz, CA.",
};

export default function AppointmentPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section
                className="relative flex items-center justify-center min-h-[45vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1558579908-9adaa7b1333d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                }}
            >
                <div className="container mx-auto px-6 py-32 text-center text-white relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-secondary">
                        Schedule a Visit
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Book an Appointment
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Visit our native plant nursery, schedule a botanical consultation, or arrange a plant pickup.
                    </p>
                </div>
            </section>

            {/* Appointment Types */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Appointment Types</h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 rounded-xl bg-card/50 hover:border-emerald-500/30 transition-all duration-200">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                <CalendarDays className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Nursery Visit</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                Browse our two-acre nursery and hand-select native plants for your project. 30-minute appointments available.
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Monday – Thursday</li>
                                <li>• 10:00 AM – 3:00 PM</li>
                                <li>• $50 plant purchase minimum</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-card/50 hover:border-emerald-500/30 transition-all duration-200">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Botanical Consultation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                Have a horticultural expert assess your property and recommend native plants tailored to your landscape.
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Residential yards welcome</li>
                                <li>• On-site property assessments</li>
                                <li>• Custom planting plans</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-card/50 hover:border-emerald-500/30 transition-all duration-200">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Plant Pickup</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                Pre-order plants from our online inventory and schedule a convenient pickup time at our nursery.
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Pre-scheduled pickups</li>
                                <li>• Credit card payments accepted</li>
                                <li>• $50 minimum order</li>
                            </ul>
                        </div>
                    </div>

                    {/* How to Book */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How to Book</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Send your appointment request to{" "}
                                        <a href="mailto:sales@centralcoastwilds.com" className="text-primary hover:underline">
                                            sales@centralcoastwilds.com
                                        </a>. Include your name, preferred date/time, and the type of appointment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Confirmation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We'll confirm your appointment via email within 1–2 business days and provide directions to our Golf Club Drive nursery.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Visit</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Come enjoy the last vestige of farmland in the city limits and the beautiful Pogonip Open Space Preserve that borders our nursery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="relative max-w-4xl mx-auto overflow-hidden bg-primary rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center">
                        {/* Subtle Background Decoration */}
                        <div className="absolute top-[-10%] right-[-5%] opacity-10">
                            <Leaf size={300} className="text-white rotate-12" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Schedule?</h2>
                        <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Email us to book your appointment or call if you have any questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-primary">
                                <a href="mailto:sales@centralcoastwilds.com?subject=Appointment%20Request">
                                    <Mail className="mr-2 h-4 w-4" /> Email to Book
                                </a>
                            </Button>
                            <Button asChild variant="ghost" size="lg" className="text-white hover:underline">
                                <a href="tel:+18314590655">
                                    <Phone className="mr-2 h-4 w-4" /> (831) 459-0655
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
