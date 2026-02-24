import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Ecological Agriculture | Central Coast Wilds",
    description: "Integrating native plants into agricultural systems to create beneficial habitat, control erosion, and reduce agrochemical dependence.",
};

export default function AgriculturePage() {
    const service = getServiceBySlug("agriculture");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
