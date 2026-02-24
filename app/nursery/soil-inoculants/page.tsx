import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Biological Soil Inoculants | Central Coast Wilds",
    description: "Supporting plant health through mycorrhizal inoculation and beneficial soil bacteria for successful transplanting and long-term vitality.",
};

export default function SoilInoculantsPage() {
    const service = getServiceBySlug("soil-inoculants");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
