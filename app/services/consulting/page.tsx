import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Ecological Consulting | Central Coast Wilds",
    description: "Expert ecological monitoring and botanical surveys to ensure compliance with environmental regulations and protect sensitive species.",
};

export default function ConsultingPage() {
    const service = getServiceBySlug("consulting");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
