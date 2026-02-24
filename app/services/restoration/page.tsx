import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Ecological Restoration | Central Coast Wilds",
    description: "Comprehensive restoration services from site preparation to long-term maintenance across all central coast ecosystems.",
};

export default function RestorationPage() {
    const service = getServiceBySlug("restoration");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
