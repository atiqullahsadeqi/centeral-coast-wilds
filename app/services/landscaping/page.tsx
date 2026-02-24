import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Ecological Landscaping | Central Coast Wilds",
    description: "Beautiful, sustainable landscapes using California native plants that save water and support local ecosystems.",
};

export default function LandscapingPage() {
    const service = getServiceBySlug("landscaping");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
