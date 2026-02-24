import { getServiceBySlug } from "@/lib/services";
import ServicePage from "@/components/service-page";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Restoration Projects | Central Coast Wilds",
    description: "A portfolio of our major ecological restoration projects across the California central coast region.",
};

export default function ProjectsPage() {
    const service = getServiceBySlug("projects");
    if (!service) return notFound();
    return <ServicePage service={service} />;
}
