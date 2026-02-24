import { ExternalLink } from "lucide-react";

export const metadata = {
    title: "Links & Resources | Central Coast Wilds",
    description: "A curated collection of links to organizations and resources related to habitat restoration, conservation biology, and native plants.",
};

const links = [
    {
        category: "Conservation & Restoration",
        items: [
            {
                name: "Society for Ecological Restoration",
                url: "http://www.ser.org/",
                description: "The premier organization developing the science of restoration. Information on upcoming workshops and great resources concerning restoration.",
            },
            {
                name: "California Native Plant Society",
                url: "http://www.cnps.org",
                description: "Dedicated to the identification and preservation of California's rare and endemic flora. Includes habitat information, plant lists, and current legislative actions.",
            },
            {
                name: "Wildlands Restoration Team",
                url: "http://www.wildwork.org/",
                description: "Critical to exotic species removal in state parks throughout the Santa Cruz Mountains. Highly dedicated volunteers at the forefront of non-chemical exotics control and removal.",
            },
            {
                name: "Midpeninsula Open Space District",
                url: "http://www.openspace.org",
                description: "Developing a greenbelt on the eastern side of the Santa Cruz Mountains in Santa Clara and San Mateo Counties. Great opportunities to explore local ecosystems.",
            },
            {
                name: "Ventana Chapter of the Sierra Club",
                url: "http://ventana.sierraclub.org/",
                description: "A great resource for the Monterey Bay, with links to several Santa Cruz and Monterey sites.",
            },
        ],
    },
    {
        category: "Biodiversity & Research",
        items: [
            {
                name: "The World Conservation Monitoring Center",
                url: "http://www.wcmc.org.uk",
                description: "An incredible wealth of world-wide information on biodiversity, including searchable databases, links, and IUCN publications.",
            },
            {
                name: "Biological Resources Division of the USGS",
                url: "https://www.usgs.gov/mission-areas/ecosystems",
                description: "Publications, news releases, and other information concerning biology and ecology at the federal level.",
            },
            {
                name: "California Environmental Resources Evaluation System",
                url: "https://web.archive.org/web/20081015060025/http://ceres.ca.gov/",
                description: "Information concerning California's diverse ecological wealth, developed by the Ca. Dept. of Forestry, Fish and Game, and other state agencies.",
            },
            {
                name: "Redwood National and State Parks Exotic Plant Management",
                url: "http://www.nps.gov/redw/naturescience/exotic-vegetation.htm",
                description: "One of the first National Parks to address non-native plants. Contains relevant information for Santa Cruz Mountains redwood ecosystems.",
            },
        ],
    },
    {
        category: "Botany & Plant Resources",
        items: [
            {
                name: "CalFlora",
                url: "http://www.calflora.org",
                description: "Database of information and pictures for over 8,000 vascular plants found in California.",
            },
            {
                name: "Internet Directory for Botany",
                url: "https://www.ou.edu/cas/botany-micro/idb-alpha/botany.html",
                description: "An invaluable resource for botanists. Includes databases searchable alphabetically or by subject.",
            },
            {
                name: "The Butterfly Net: Lepidoptera Conservation Tool",
                url: "https://ctcosma.shinyapps.io/the_butterfly_net/",
                description: "Lists native host and nectar plants to support specific butterfly and moth species based on your California address.",
            },
        ],
    },
    {
        category: "Herbalism & Ethnobotany",
        items: [
            {
                name: "Michael Moore - SW School of Botanical Medicine",
                url: "http://www.swsbm.com/HOMEPAGE/HomePage.html",
                description: "One of the best resources for students of herbology. Free downloadable texts on traditional medicines.",
            },
            {
                name: "Herb Research Foundation",
                url: "http://www.herbs.org/index.html",
                description: "A non-profit organization specializing in education about the medicinal uses of plants.",
            },
        ],
    },
    {
        category: "Nature & Recreation",
        items: [
            {
                name: "Wilbur Hot Springs Nature Preserve",
                url: "http://www.wilburhotsprings.com",
                description: "Spectacular nature preserve with breathtaking valleys, panoramic ridges, and an internationally renowned wildflower valley.",
            },
            {
                name: "Envirolink",
                url: "http://www.envirolink.org",
                description: "Excellent resource for environmental issues, with links, contacts for organizations, and publications.",
            },
        ],
    },
];

export default function LinksPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section
                className="relative flex items-center justify-center min-h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1652600737672-12942122d1c2?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
                }}
            >
                <div className="container mx-auto px-6 py-32 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.25em] font-medium mb-4 text-secondary">
                        Resources
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                        Links & Resources
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of resources on habitat restoration, conservation biology, and environmental topics.
                    </p>
                </div>
            </section>

            {/* Links Categories */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    {links.map((category, idx) => (
                        <div key={category.category} className={`mb-12 ${idx !== links.length - 1 ? "pb-12 border-b border-border/40" : ""}`}>
                            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.items.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block p-4 rounded-lg border border-border/40 hover:border-emerald-500/30 hover:bg-card/80 transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-medium text-foreground group-hover:text-emerald-500 transition-colors">
                                                {item.name}
                                            </h3>
                                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
