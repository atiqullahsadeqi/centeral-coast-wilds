import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Research | Central Coast Wilds",
    description: "Supporting ongoing research in restoration ecology, agroecology, ethnobotany, and invasive species control.",
};

export default function ResearchPage() {
    const service = getServiceBySlug("research");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
