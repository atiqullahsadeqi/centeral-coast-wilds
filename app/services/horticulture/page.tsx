import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Horticultural Services | Central Coast Wilds",
    description: "Wholesale native plant nursery specializing in watershed-specific plants for habitat restoration and ecological landscape projects.",
};

export default function HorticulturePage() {
    const service = getServiceBySlug("horticulture");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
