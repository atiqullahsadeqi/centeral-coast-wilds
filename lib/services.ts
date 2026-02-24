export interface ServiceSection {
    heading?: string;
    body: string;
}

export interface Service {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    sections: ServiceSection[];
    link: string;
}

export const services: Service[] = [
    {
        slug: "consulting",
        title: "Ecological Consulting",
        subtitle: "Ecological Monitoring & Botanical Surveys",
        description: "Expert ecological monitoring and botanical surveys to ensure compliance with environmental regulations and protect sensitive species.",
        image: "https://images.unsplash.com/photo-1763228027600-cbfd39fe422b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
        link: "/services/consulting",
        sections: [
            {
                heading: "Ecological Monitoring",
                body: `<p>Central Coast Wilds assists clients with ecological monitoring to ensure compliance with federal, state, county, and city permit requirements. Staff and associates provide a broad base of ecological knowledge, including botanical, wildlife, and entomological monitoring.</p>`
            },
            {
                heading: "Habitat Assessment & Surveys",
                body: `<p>Central Coast Wilds conducts surveys and habitat assessments to assist clients in meeting federal, state and local environmental guidelines. We use standard methodologies to gather vegetation information including grid surveys, point-quarter and random transect analysis of populations and multivariate community analysis. We assess project impacts and propose mitigation measures to mitigate for project impacts on native species and habitat.</p>`
            },
            {
                heading: "Botanical Surveys for Listed Species",
                body: `<p>Central Coast Wilds conducts focused botanical surveys for state and federally listed species, candidate species, and species of special concern. We utilize currently accepted methodologies endorsed by the California Department of Fish and Game, the California Native Plant Society, and the United States Fish and Wildlife Service to identify the presence of sensitive species. We complete impact assessments and design species-specific mitigation plans to mitigate for project impacts.</p>`
            },
            {
                heading: "Biodiversity Monitoring Protocols",
                body: `<p>CCW uses established protocols for long term plot-based monitoring of plant species diversity. They can be used in conjunction with protocols for monitoring other terrestrial organisms living above or below ground, and for monitoring selected climatic and other abiotic variables.</p>
        <ul>
          <li>Canopy-Tree Stratum Biodiversity Monitoring</li>
          <li>Shrub and Small-Tree Stratum Biodiversity Monitoring</li>
          <li>Ground Vegetation Stratum Biodiversity Monitoring</li>
          <li>Vegetation Gradient Biodiversity Monitoring</li>
          <li>Invasive Vegetation Monitoring</li>
        </ul>`
            }
        ]
    },
    {
        slug: "restoration",
        title: "Ecological Restoration",
        subtitle: "Habitat Restoration & Vegetation Management",
        description: "Comprehensive restoration services from site preparation to long-term maintenance across all central coast ecosystems.",
        image: "https://images.unsplash.com/photo-1759325906183-6b80895b6795?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/services/restoration",
        sections: [
            {
                heading: "Restoration Planning & Implementation",
                body: `<p>Central Coast Wilds implements and manages ecological restoration plans, vegetation management plans, habitat conservation plans and large commercial landscapes. CCW oversees site preparation, soil and plant salvage, exotic pest plant removal, mowing, site-specific seed collection, plant propagation, irrigation and planting operations. We also implement and oversee long-term maintenance operations in order to insure the success of our restoration & landscape projects.</p>
        <p>We have experience in all of the ecosystems on California's central coast, including coastal terrace prairie, maritime chaparral, coastal scrub, mixed evergreen forest, Santa Cruz sandhills, redwood forest, wetland and riparian habitats.</p>`
            },
            {
                heading: "Hydroseeding & Erosion Control",
                body: `<p>Central Coast Wilds contracts and oversees hydroseeding of native seed mixes for bank stabilization and revegetation projects.</p>
        <p>Long term erosion control planning requires proper plant species selection. Native perennial bunch grasses are an excellent choice for erosion control. Unlike non-native annual grasses, native perennial grasses are long lived and deep rooted plants that provide permanent cover. Because of their rooting ability, native grasses provide increased water infiltration rates and less over surface flow, thus reducing erosion. Most native grasses are also drought tolerant, remaining green during the dry season, long after annual erosion control grasses have turned dry and brown.</p>
        <p>Central Coast Wilds offers a native erosion control mix consisting of three native species that germinate and develop rapidly. This mix performs well under a variety of environmental parameters: sun/shade, wet/dry, or sandy/clay soil types.</p>`
            },
            {
                heading: "Biotechnical Erosion Control",
                body: `<p>Central Coast Wilds installs biotechnical erosion control systems for slopes and stream banks. Biotechnical erosion control combines vegetated and structural strategies utilizing techniques including straw rolls, willow wattles, brush layering and vegetated riprap, gabions and rock walls. Biotechnical systems provide cost effective solutions to erosion control problems that enhance habitat without compromising the structural integrity of public works projects.</p>`
            },
            {
                heading: "Invasive Species Eradication",
                body: `<p>Biological diversity is being threatened by the invasion of nonnative ("exotic") plants. An exotic plant is simply a species that has been introduced into an environment different from that in which it evolved. While not all exotics are a problem, some are invasive; these are capable of displacing other species, thereby leading to their demise.</p>
        <p>Having left behind the predators and competitors that kept them in balance with other species at home, invasive exotics can proliferate covering our beaches, meadows, and forest floors, quietly eroding the underpinnings of our native ecosystems. The main invasive species that we eradicate are: Brooms, Pampas grass, Cape ivy, English ivy, Ice plant, Periwinkle (vinca), Eucalyptus, Acacia, and Himalaya berry.</p>`
            }
        ]
    },
    {
        slug: "landscaping",
        title: "Ecological Landscaping",
        subtitle: "Sustainable Native Landscape Design & Installation",
        description: "Beautiful, sustainable landscapes using California native plants that save water and support local ecosystems.",
        image: "https://images.unsplash.com/photo-1761958151634-2faec6ce4d9a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/services/landscaping",
        sections: [
            {
                heading: "Your Natural Choice",
                body: `<p>If you are looking for an experienced company to economically and ecologically bring your landscape dreams to life, Central Coast Wilds is your Natural Choice. We offer a wide range of traditional and sustainable options for you to choose from.</p>
        <p>Sustainability means working with your property's natural resources and habitats while saving money on material, installation, maintenance, upkeep and water bill costs. We specialize in consulting, designing, installing, and managing landscapes with California native plant influences. Our construction features are skillfully integrated with their surrounding environments to create harmonious outdoor living spaces. To assure quality, our organic native plant nursery propagates plants specifically for our projects.</p>`
            },
            {
                heading: "27 Years of Excellence",
                body: `<p>For 27 years, Central Coast Wilds has been maximizing options while minimizing costs for our public, corporate, and residential clients. We are respected as a standard bearer of the rapidly growing ecological landscaping industry. Our detailed designs, skilled crews, organic native nursery and integrated use of traditional and sustainable approaches show that restoring, enhancing and preserving ecological harmony isn't just our goal, it is our passion.</p>`
            },
            {
                heading: "Habitat Garden Resources",
                body: `<p>We offer comprehensive habitat garden guides for a variety of California ecosystems:</p>
        <ul>
          <li>Native Grassland Habitat</li>
          <li>Oak Woodland Habitat</li>
          <li>Coastal Scrub Habitat</li>
          <li>Redwood Habitat</li>
          <li>Ponds & Rain Gardens</li>
          <li>Bioswales</li>
          <li>Green Roofs & Living Walls</li>
        </ul>`
            }
        ]
    },
    {
        slug: "agriculture",
        title: "Ecological Agriculture",
        subtitle: "Native Hedgerows, Windbreaks & Agricultural Buffers",
        description: "Integrating native plants into agricultural systems to create beneficial habitat, control erosion, and reduce agrochemical dependence.",
        image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/services/agriculture",
        sections: [
            {
                heading: "Hedgerows & Windbreaks",
                body: `<p>Central Coast Wilds designs agricultural windbreaks, hedgerows and waterways utilizing native plant species to:</p>
        <ol>
          <li>Create beneficial insect and wildlife habitat in and around the farm</li>
          <li>Reduce water and wind erosion of the soil</li>
          <li>Add income to the farm by reducing dependence on agrochemical inputs</li>
        </ol>`
            },
            {
                heading: "Multiple Benefits",
                body: `<p>Hedgerows and windbreaks can have multiple functions: they can serve as habitat for beneficial insects, pollinators and other wildlife; provide erosion protection and weed control; stabilize waterways; serve as windbreaks; reduce non-point source water pollution and groundwater pollution; protect from drift; increase biodiversity; and provide an aesthetic resource.</p>
        <p>Diversity in hedgerow species assures a range of attributes, such as multiple kinds of insects and wildlife attracted, positive effects to soil and water resources, and success of individual plants under site-specific climatic and other environmental conditions. Over the past twenty years, hedgerows, windbreaks and other habitat plantings are increasingly being used in modern agricultural systems. The bottom line to planting hedgerows and windbreaks is that, while they are a separate farming operation, they can bring diversity and beauty to the farm.</p>`
            },
            {
                heading: "Agricultural Buffer Strips",
                body: `<p>Agriculture buffer strips utilizing native plants have applications in:</p>
        <ol>
          <li>Filtration of irrigation water runoff to protect adjacent riparian and wetland areas</li>
          <li>Buffering adjacent properties from agricultural dusts and noise</li>
        </ol>`
            }
        ]
    },
    {
        slug: "horticulture",
        title: "Horticultural Services",
        subtitle: "Native Plant Nursery & Custom Contract Growing",
        description: "Wholesale native plant nursery specializing in watershed-specific plants for habitat restoration and ecological landscape projects.",
        image: "https://images.unsplash.com/photo-1612680694307-e00979cc752f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/services/horticulture",
        sections: [
            {
                heading: "Native Plant Nursery",
                body: `<p>Central Coast Wilds nursery is a wholesale native plant nursery that specializes in growing watershed specific native plants for habitat restoration and ecological landscape projects. We grow hundreds of species of native plants that are indigenous to watersheds throughout the Monterey and San Francisco bay areas.</p>
        <p>The nursery began as a back yard nursery on the Westside of Santa Cruz in 1992 and rapidly grew and moved to the Soquel Hills in 1993. In 2000 the nursery moved back to the City of Santa Cruz to the current location on Golf Club Drive.</p>
        <p>Visitors are welcome, Monday through Thursday, by appointment only. Come enjoy the last vestige of farm land in the City limits and the beautiful Pogonip Open Space Preserve that border the nursery.</p>`
            },
            {
                heading: "Custom Contract Growing",
                body: `<p>Central Coast Wilds operates a two-acre nursery and propagation facility in the City of Santa Cruz. On a contract basis we grow native plants for restoration, revegetation, agricultural and landscape applications. We have expertise in propagation plant species from coastal bluff, grassland, riparian, wetland and woodland habitats.</p>`
            },
            {
                heading: "Site-Specific Seed Collection",
                body: `<p>CCW custom collects native plant seed in order to provide watershed specific plants for habitat restoration projects.</p>`
            },
            {
                heading: "Botanical & Species Consultations",
                body: `<p>If you are interested in having a horticultural expert assess your property and make native plant recommendations (residential yards OK!), contact us with your name, phone number, location and property size.</p>
        <p>Central Coast Wilds also consults with landscape architects and project planners on the selection of native plant species for use in habitat restoration and ecological landscape projects.</p>`
            },
            {
                heading: "Native Erosion Control Mix",
                body: `<p>Central Coast Wilds specifies and sells a custom erosion control seed mix. We do not sell standard wildflower mixes ("the meadow in a can"). These standard mixes often contain natives and non-natives, and many include weedy species. "Adapted to California" is not the same as native to California.</p>`
            }
        ]
    },
    {
        slug: "soil-inoculants",
        title: "Biological Soil Inoculants",
        subtitle: "Mycorrhizal Inoculation for Plant Health",
        description: "Supporting plant health through mycorrhizal inoculation and beneficial soil bacteria for successful transplanting and long-term vitality.",
        image: "https://images.unsplash.com/photo-1703788359370-56c4d4c69bd9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/nursery/soil-inoculants",
        sections: [
            {
                heading: "Why Mycorrhizae Matter",
                body: `<p>Mycorrhizae are a critical component of plant health. Plant production, rooting, flowering, water absorption and yields can all improve with inoculation. Landscape conditions are not ideal, which is why it is so important to aid plant survival through inoculation.</p>`
            },
            {
                heading: "The Problem with Standard Nursery Practices",
                body: `<p>Standard nursery and greenhouse practices do not accurately mimic many of the natural systems that have influenced the evolution of plants. Nursery and greenhouse production manufactures plants according to specifications required for effective marketing and has largely ignored plant and soil systems beyond those necessary to maintain the physical appearance expected by customers. Thus the nursery industry produces plants that are not naturally complete.</p>
        <p>When plants do not have mycorrhizal associations typically found in nature, they are relatively fragile and can quickly die if not maintained intensively. Once purchased and installed, such plants are an immediate target for herbivores because they lack the natural immune systems and defense mechanisms supported by healthy mycorrhizal associations.</p>`
            },
            {
                heading: "The Solution",
                body: `<p>Mycorrhizal inoculation can significantly support transplanted trees, shrubs and flowerbed success, especially under adverse conditions. However, a stable and highly diverse community of fungal symbionts can only be supported by healthy soils. Additional benefits for soil and plants can be realized by augmenting populations of beneficial soil bacteria through the addition of natural bioactivity stimulators. Without healthy microbial communities in the soil plants lose the opportunity of better utilizing the natural minerals that make up the soil.</p>`
            }
        ]
    },
    {
        slug: "projects",
        title: "Restoration Projects",
        subtitle: "Featured Project References",
        description: "A portfolio of our major ecological restoration projects across the California central coast region.",
        image: "https://images.unsplash.com/photo-1769613637793-1d497f0fedf0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/projects",
        sections: [
            {
                heading: "Our Project Portfolio",
                body: `<p>Central Coast Wilds and Ecological Concerns Incorporated have completed restoration and landscaping projects throughout California's central coast. Our work spans flood reduction, ecosystem restoration, habitat conservation, and commercial landscape installations.</p>`
            },
            {
                heading: "Featured Projects",
                body: `<ul>
          <li><strong>San Francisquito Creek Flood Reduction Project</strong> — Palo Alto, CA</li>
          <li><strong>Silver Creek Phase 2 Flood Protection Project</strong> — San Jose, CA</li>
          <li><strong>Upper Guadalupe River Flood Risk Management Project Reach 10B+12</strong> — San Jose, CA</li>
          <li><strong>Residence — Fairfield Inn</strong> — San Jose, CA</li>
          <li><strong>UCSC Coastal Science Campus Restoration</strong> — Santa Cruz, CA</li>
          <li><strong>Stevens Creek Corridor Park</strong> — Cupertino/Mountain View, CA</li>
          <li><strong>Adobe Creek Bank Repair</strong> — Los Altos Hills, CA</li>
          <li><strong>Bear Creek Invasive Removal</strong> — Santa Cruz Mountains, CA</li>
        </ul>`
            },
            {
                heading: "Phytosanitary Standards",
                body: `<p>All restoration projects follow the <em>Guidelines to Minimize Phytophthora Pathogens in Restoration Nurseries</em>, ensuring that our plants are free of harmful pathogens before outplanting.</p>`
            }
        ]
    },
    {
        slug: "research",
        title: "Research",
        subtitle: "Restoration Ecology & Native Plant Research",
        description: "Supporting ongoing research in restoration ecology, agroecology, ethnobotany, and invasive species control.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        link: "/research",
        sections: [
            {
                heading: "Our Research Mission",
                body: `<p>Central Coast Wilds supports ongoing research in the areas of restoration ecology, agroecology, ethnobotany and invasive plants eradication. We sponsor students from the University of California Santa Cruz, San Jose State University, Monterey Bay State University and Cabrillo Community College.</p>`
            },
            {
                heading: "Research Focus Areas",
                body: `<ul>
          <li><strong>Native plant population ecology:</strong> In conjunction with the California Native Plant Society and the California Native Grass Association, we are working to develop a database of information on the genetic diversity of native plant populations to provide ecologists with new tools for planning restoration projects.</li>
          <li><strong>Invasive non-native plant control:</strong> In support of the California Exotic Pest Plant Council, we are researching non-chemical techniques for eradicating exotic pest plants from coastal ecosystems.</li>
          <li><strong>Integration of native plants into agroecosystems:</strong> Working with the Natural Resources Conservation Service and the Community Alliance with Family Farmers, we are developing applications of native plants in windbreaks, hedgerows and critical areas within agroecosystems.</li>
          <li><strong>Medicinal qualities of native plants:</strong> In cooperation with professional herbalists, we are developing educational material on the sustainable use of native plant species in the preparation of medicinal products.</li>
        </ul>`
            }
        ]
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug);
}
