export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export const articles: Article[] = [
  {
    slug: "learning-the-land-podcast",
    title: "Learning the Land with Land Trust of Santa Cruz County Podcast",
    date: "February 2022",
    category: "Podcast",
    image: "http://www.centralcoastwilds.com/slices/staff/m-marshall-205.jpg",
    excerpt: "Laura Dannehl-Schickman interviews Matt Marshall on the critical role native plants play in restoring entire ecosystems.",
    content: `<p>Laura Dannehl-Schickman interviews our Matt Marshall on the critical role native plants play in restoring entire ecosystems.</p>
      <p>Listen to the "Learning the Land" podcast at the <a href="https://www.landtrustsantacruz.org/episode-10-central-coast-wilds/" target="_blank" rel="noopener noreferrer">Land Trust of Santa Cruz County</a> website!</p>`
  },
  {
    slug: "spring-growth-2021",
    title: "2021 Spring Growth at CCW",
    date: "May 2021",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2021/2021-Spring-Growth-CCW/Iris-douglasiana.jpg",
    excerpt: "A visual update on the lush spring growth at our nursery this season.",
    content: `<p>Photos by Josh Fodor.</p>
      <p>A photographic tour of the lush spring growth at our nursery this season, featuring species like Iris douglasiana and other California natives preparing for restoration projects across the central coast.</p>`
  },
  {
    slug: "students-cultivating-climate",
    title: "Central Coast Students Cultivating the Climate",
    date: "May 12, 2021",
    category: "Education",
    image: "http://www.centralcoastwilds.com/news/2021/Central-Coast-students-cultivating-the-climate/Iona-digging.jpg",
    excerpt: "Local first-graders in the Santa Cruz Mountains are becoming environmental stewards by planting native trees in fire-affected areas.",
    content: `<p>Story by CCW staff, photos by teachers, parents, and staff.</p>
      <p>This May, Central Coast Wilds nursery (CCW) provided 100 CA native trees to Janet Stahl's first grade class at San Lorenzo Valley Elementary School in the Santa Cruz Mountains. The students planted these trees at their homes, many of which were affected by the CZU Lightning Complex fires this past summer. A funny coincidence is that one of Janet's students is Holden Hansen, our own Garrick Hansen's son. And also a big shout out to Richard Gessner at Monarch Consulting Arborist for purchasing the trees...another great class dad!</p>
      <p>The students have named their trees and are keeping nature journals, following their growth by measuring plant height, counting leaves, and doing field sketches throughout the remainder of the school year.</p>
      <p>Sam Adelson with the Coastal Watershed Council runs an after school program at Bay View Elementary called Watershed Rangers in which 3rd and 4th graders learn about watershed science and advocacy. They do fun activities focusing on erosion, steelhead trout, native plants, water conservation, pollution prevention, and the list goes on!</p>
      <p>The students will follow their growth by measuring plant height, counting leaves, and doing field sketches throughout the remainder of the school year. Sam creates opportunities for Action Projects so students can make a difference and implement what they've learned. They've made and posted flyers, passed out native seed packets courtesy of Central Coast Wetlands Group, and this time around, the students wanted to plant native species to attract more butterflies and ladybugs to their Life Lab garden and protect the soils!</p>
      <p>Central Coast Wilds often works with UCSC students, giving them volunteering and employment opportunities so they can develop skills for careers in botany or horticulture while they grow the plants that will be used to restore habitats.</p>`
  },
  {
    slug: "restoration-steep-slopes",
    title: "Ecological Restoration on Steep Slopes",
    date: "May 2021",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2021/Ecological-Restoration-on-Steep-Slopes/Pacifica-bluff.jpg",
    excerpt: "Restoring native habitats on steep terrain requires specialized techniques to manage erosion and ensure long-term stability.",
    content: `<p>Story and photo by ECI staff.</p>
      <h3>Pacifica Coastal Bluffs</h3>
      <p>Over the past several months ECI has cleaned up the old slope by removing old erosion control products, removed invasive plants such as ice plant, hydroseeded the slope, installed heavy duty erosion control blankets and finished with the installation of native coastal bluff plants grown by Central Coast Wilds nursery. The native species installed include: Frageria chiloensis, Eriophyllum staechadifolium, Erigeron glaucus, Eriogonum latifolium, and Dudleya spp. ECI will continue to maintain the site through the first year in hopes of getting the plants established in these extreme conditions.</p>
      <p>A HUGE thank you to the members of the crew working on this! Steve Glascock, Mo Najera, Kevin Dougherty, Forest Wallace, Spencer Dillon, Rafael Higuera, John Sherman, Gonzalo Haro, Oliver Delarosa!</p>
      <h3>Ben Lomond Sandhills</h3>
      <p>Since ECI started working at Quail Hollow Quarry in 2013, we have not been able to access the dreaded Upper Highwall, because previously-used fall protection systems were deemed unsafe. Thanks to some ongoing efforts by numerous people, there are now cables stretching across the top of the wall, totalling about 500 feet. Forrest led the way, with help from Polo, Miguel, Mo, Gonzalo, Kevin P., Aaron B., Garrick and Ellen. After installing the cables, planting on the Upper Highwall proceeded, including the CNPS-listed Arctostaphylos silvicola, endemic to the sandhills. Partway through the planting, a crazy windstorm buried half the plants, but the site is so steep that most of them soon saw the light again.</p>`
  },
  {
    slug: "adobe-creek-restoration",
    title: "Adobe Creek in Los Altos Hills",
    date: "May 2021",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2021/Adobe-Creek-in-Los-Altos-Hills.jpg",
    excerpt: "A bank restoration project along Adobe Creek focused on enhancing habitat and stabilizing the sensitive riparian corridor.",
    content: `<p>Story and photo by ECI staff.</p>
      <p>Forrest, Spencer, Kevin P, Miguel, and Mario (with help from a few others depending on the day) have been working hard on a design-build bank repair along Adobe Creek in Los Altos Hills. The bank was damaged by a water main break on the adjacent street, and we have been working with the engineering and hydrology team at Balance Hydrologics for the past year to get the project up and running. The team set up the jobsite including wildlife fencing, clearing vegetation for access, and setting up dams and piping to divert the creek around the work area, all in strict compliance with the project permits.</p>
      <p>Despite the successful diversion of surface water, ground water presented an issue. A lot of problem solving was required to pump groundwater seepage out of the site in a way that protected downstream water quality, and dig a footing for the rock toe of the repair. In the end, a vacuum trailer was used to pump out the muddy slurry for the excavation. The hitch on this rental equipment snapped (of course), but the team was able to keep things moving by chaining it to the telehandler on site and moving it around.</p>
      <p>The team has now set all of the rock toe carefully around willow filled sonotubes that penetrate the rock, giving the willows access to the native soil and groundwater. Work on a crib wall of redwood timbers has begun. The bank repair layer cake will be topped with a set of wrapped fill lifts (compacted earth wrapped in erosion control blankets), then frosted with native plants (grown by CCW!) and irrigation.</p>
      <p>This would have been a challenging project even had things gone perfectly smoothly, so kudos to the team for overcoming the roadblocks thus far and producing a high quality and environmentally friendly bank repair!</p>`
  },
  {
    slug: "restoring-landscape-after-fire",
    title: "Restoring the Landscape After the Fire",
    date: "October 2020",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2020/Restoring-the-Landscape-After-the-Fire/Quercus-nuns-fire-SaxonHolt.jpg",
    excerpt: "Advice on how to help your landscape recover naturally after a wildfire, including infrastructure assessment and invasive plant management.",
    content: `<p>Article by Josh Fodor.</p>
      <p>After every fire I receive inquiries from homeowners and landscape managers, anxious to know what needs to be done immediately after a fire to help the landscape recover. My advice is: don't overreact. Native plants will take care of themselves. There's enough for you to do after a fire without adding unnecessary tasks. That said, there are some specific steps you should take.</p>
      <p><strong>Assess infrastructure and erosion risks.</strong> Drainage infrastructure is often damaged or destroyed in a fire. Culverts under driveways and roads may be crushed by fire fighting equipment or in the case of plastic culverts, completely melted. Inspect your drainage systems carefully and make a plan for increased runoff that will occur during the rains.</p>
      <p><strong>Plan ahead to remove invasive plants after the first rains.</strong> Many invasives, such as French broom, love fires. Plan ahead for the flush of growth that occurs when it rains so you can remove the invasives and let the natives reclaim the landscape. A botanist can help you identify invasive species or plan how to handle the rains.</p>
      <p><strong>Don't contaminate burnt areas with seeds.</strong> Purchased erosion control seed mixes, even California native mixes, will not be native to your property, and it is almost always better if you take advantage of the native seeds that are indigenous to the unique history and microclimates of your property. For critical areas that may have little to no native seed bank, seed with cereal barley (Hordeum vulgare) or similar non-native annual seed.</p>
      <p><strong>If you escaped this fire, prepare for the next.</strong> Minimize flammable debris and invasive fire-prone trees, and work with neighbors to reduce fire risk in your area. Decades of research have established that prescribed burning is the most effective measure for long-term risk management.</p>`
  },
  {
    slug: "red-osier-dogwood-season",
    title: "Red Osier Dogwood: A Plant for Every Season",
    date: "September 2020",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2020/Red-Osier-Dogwood-A-Plant-for-Every-Season/A-handful-of-gorgeous-red-osier-dogwood-berries--Cornus-sericea.jpg",
    excerpt: "The Red Osier Dogwood offers year-round visual appeal and vital ecological services, from erosion control to supporting pollinators.",
    content: `<p>Story by Jessica Calvillo.</p>
      <p>For many plants, winter dormancy is not the most visually spectacular time of year -- that is unless you're a red osier dogwood (Cornus sericea). In contrast with the brown, barren branches of other deciduous trees and shrubs, the deep cherry red branches of the red osier dogwood are particularly eye catching in their own right. As the leaves turn red and fall from their ruby branches, we can see the beautiful clusters of berries that change from white to frosty blue as they age. This year-round ornamental shrub's natural habitat is along streams, creeks, and riverbanks throughout most of the North American continent. Its presence in the aforementioned habitats serves the vital function of erosion control, much like willow (Salix sp.) or mugwort (Artemisia douglasiana).</p>
      <p>Indigenous communities in California found many ways to put dogwood to good use. It is an essential element in traditional basket weaving because of the malleability and durability of its branches. In fact, the word "osier" means "willow-like" in French and was given this name due to its equivalent favorability as a basket weaving material. To ensure the availability of dogwood branches that were of good basket weaving quality, indigenous people used hard pruning and controlled burning techniques. Beyond weaving, dogwood also has a number of traditional medicinal uses. A tea made from the bark has been used internally for coughs, colds, fevers, sinus congestion, liver problems, and postpartum bleeding.</p>
      <p>Among our native wildlife the berries are a popular foraging item for birds and small mammals. During dogwood's blooming period (June-August) the flowers attract a variety of pollinators including the spring azure butterfly (Celastrina ladon). From its beauty to its ethnobotanical history and wildlife value, red osier dogwood makes a great addition to a garden that receives a little extra water.</p>`
  },
  {
    slug: "september-foliage-ccw",
    title: "September Foliage at CCW",
    date: "September 2020",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2020/September-Foliage-at-CCW/Eriophyllum-staechadifolium--lizard-tail.jpg",
    excerpt: "A collection of native plants showing off their early autumn colors at our nursery.",
    content: `<p>Photos by Central Coast Wilds staff.</p>
      <p>Featuring: Eriophyllum staechadifolium (lizard tail), Frangula californica (Coffeeberry), Epilobium canum (California fuchsia), Physocarpus capitatus (Pacific ninebark), Sedum spathulifolium (broadleaf stonecrop), Festuca rubra 'Molate' (Red Fescue 'Molate'), Cephalanthus occidentalis (button willow), Acer negundo (box elder), Platanus racemosa (Western sycamore), and Sedum spathulifolium 'purpureum' (Pacific stonecrop purple form).</p>`
  },
  {
    slug: "symphyotrichum-chilense-lavender-lover",
    title: "Symphyotrichum chilense: Lavender Lover of Bees and Butterflies",
    date: "August 2020",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2020/Symphyotrichum-chilense-Lavender-Lover-of-Bees-and-Butterflies/Symphyotrichum-chilense--California-aster.jpg",
    excerpt: "The California Aster is a drought-resistant powerhouse that provides crucial late-season nectar for pollinators.",
    content: `<p>Story by Maddie Ginn.</p>
      <p>Symphyotrichum chilense, or California aster, makes its haven in a variety of our beloved California ecosystems. As a facultative plant, it is well adapted and common in both wetland and non-wetland habitat types, and can be found in coastal sage scrub, coastal salt marsh, grassland, meadow, coastal dune and bluff, and freshwater marsh habitats. This plant is especially valuable in the field of restoration, commonly grown in our nursery to fill in meadow gardens, stabilize slopes with its extensive, fibrous root systems, fill in native hedgerow projects, and to provide a beautiful flush of color to our native landscapes.</p>
      <p>Previously known as Aster chilensis, this lavender petaled beauty has high value for late season pollinator species. Its showy, daisy-like flowers bloom in early June and stay through fall, providing the crucial pollen supply needed for beneficial insect species. Bumble bee queens that require energy reserves prior to their winter dormancy rely on the availability of species like S. chilense to bloom in late summer and fall. Checkerspot and crescent butterflies utilize this species as a host plant during their juvenile caterpillar form, and also as nectar sources once they have metamorphosed.</p>`
  },
  {
    slug: "may-flowers-ccw",
    title: "May Flowers at CCW",
    date: "May 2020",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2020/May-Flowers-at-CCW/Sidalcea-malviflora--checkerbloom--pink-flowers.jpeg",
    excerpt: "A visual journey through the peak bloom of our native species this May.",
    content: `<p>Photos by Maddie Ginn.</p>
      <p>Featuring: Sidalcea malviflora (checkerbloom), Symphoricarpos albus (snowberry), Acmispon glaber (deerweed), Dichelostemma ida maia (firecracker flower), Phacelia bolanderi, Salvia leucophylla (purple sage), Ribes menziesii (canyon gooseberry), Erythranthe cardinalis (scarlet monkeyflower), Grindelia stricta (coastal gumweed), Ericameria fasciculata (goldenbush), Mimulus aurantiacus (sticky monkey flower), Epipactis gigantea (stream orchid), Eriodictyon californicum (Yerba santa), Eriogonum crocatum (wild buckwheat), Lupinus arboreus (yellow bush lupine), Sisyrinchium bellum (blue eyed grass), Achillea millefolium 'Mellow Yellow' (golden yarrow), Sidalcea malviflora (checker bloom), Achillea millefolium 'Paprika' (pink yarrow), and Helenium puberulum (sneezeweed).</p>`
  },
  {
    slug: "trilliums-for-shade-garden",
    title: "Trilliums for the Shade Garden",
    date: "April 2020",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2020/Trilliums-for-the-Shade-Garden/Trillium-kurabayashii.jpg",
    excerpt: "Trilliums are prized for their beauty and longevity, but they require patience and ethical sourcing for a successful shade garden.",
    content: `<p>Story by Jessica Calvillo.</p>
      <p>Known as toadshades or wakerobins, trilliums can take up to seven years to flower from seed. They are beautiful additions to redwood understories alongside ferns and wild ginger. If you are unfamiliar with these beauties, let me paint you a picture. Trilliums are low growing, perennial, woodland plants with a distinctive appearance featuring a single stem which supports a whorl of three broad leaves and a single, three-petaled flower. In our region of the "Trillium Belt," the most common species found are T. ovatum (White or Western Trillium), T. chloropetalum (Giant Trillium), T. albidum (Sweet White Trillium), and T. kurabayashii (Giant Purple Trillium).</p>
      <p>Trilliums prefer to grow in the shade canopy of bigleaf maples, redwoods, and oaks. They can be found growing alongside other shade-loving species like ferns, wild ginger (Asarum caudatum), and redwood violets (Viola sempervirens). These companion plants make great additions to a shade garden beyond trilliums themselves.</p>
      <p>An important note: Due to the long time it takes trilliums to grow to maturity, be very cautious about the source of any trillium plants you purchase. Wild-harvesting trilliums is unsustainable and threatens wild populations. Always purchase from ethical nurseries that propagate their own stock.</p>`
  },
  {
    slug: "silver-linings-spring-flowers",
    title: "Silver Linings and Springtime Flowers",
    date: "March 2020",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2020/Silver-Linings-and-Springtime-Flowers/Ceanothus--Dark-Star.jpg",
    excerpt: "Resilience in the face of change: our plants continue to thrive as we adapt to new ways of working and caring for our watershed.",
    content: `<p>Story and photos by Maddie Ginn.</p>
      <p>As we navigate global changes and shelter in place, the natural world offers a grounding reset. At CCW, our plants are waking from dormancy, reminding us of the healing power of nature. Featuring: Ceanothus 'Dark Star,' Iris douglasiana (Douglas iris), Clarkia rubicunda (farewell to spring), Salvia spathacea (hummingbird sage), and many more.</p>
      <p>Though this is a time of uncertainty, we find solace in the simple act of growing and caring for our California native plants. The nursery continues to wake up with color and life as spring progresses, and we look forward to sharing these plants with our community.</p>`
  },
  {
    slug: "changing-tide-san-francisquito",
    title: "A Changing Tide: San Francisquito Creek Project",
    date: "February 2020",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2020/Changing-Tide-The-San-Francisquito-Creek/San-Francisquito-Creek-Flood-Reduction.jpg",
    excerpt: "Innovative restoration strategies for floodplain mitigation and riverbank revegetation in response to sea level rise.",
    content: `<p>Story by Maddie Ginn.</p>
      <p>Just as our world is changing rapidly in the wake of climate change, restoration strategies to protect and perpetuate our communities, towns, cities, and environments must change also. Our team at Central Coast Wilds (CCW) native plant nursery and at Ecological Concerns Inc. have worked diligently to do just that for the San Francisquito Creek Flood Reduction, Ecosystem Restoration, and Recreation Project. We are proud to be a part of a changing tide with floodplain mitigation and riverbank revegetation we completed in response to predicted sea level rise in the area. As a result of our project, 7,000 tidal marsh and marsh transition plants have been replanted along several reaches of the river at the city limits of Palo Alto and East Palo Alto.</p>
      <p>The species selected for this project were chosen to support inundation from the San Francisco Bay tides twice daily on the preexisting floodplain surfaces. Ambrosia psilostachya, Artemisia douglasiana, Euthamia occidentalis, Limonium californicum, Salicornia pacifica, and Symphyotrichum chilense propagules were collected from areas nearby the project site. These propagules were then delivered to CCW for propagation, where specially trained staff grew them out to beautiful, well rooted plants ready for their final destination.</p>
      <p>All of the plants for the San Francisquito project were grown in our CalPhytos, High Phytosanitary BMP nursery. Production in this nursery requires strict protocols including heat-treatment of all soil media, comprehensive documentation of all BMP processes, specialized BMP-trained staff, and stringent sterilization and cleanliness protocols for all propagules at every stage of production.</p>
      <p>Prior to being delivered to the site these plants were tested and analyzed by the California Department of Food and Agriculture as one last quality-control check prior to outplanting. We are excited to see how these plants fare in the upcoming years, and the valuable ecosystem services they will provide.</p>`
  },
  {
    slug: "nursery-research-oak-manzanita",
    title: "Oak and Manzanita: Exciting Research at CCW",
    date: "February 2020",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2020/Nursery-Research-Oak-and-Manzanita/manzanita-cutting-figure-4.png",
    excerpt: "Using a scientific approach to improve nursery production efficiency and plant health through rigorous studies on oaks and manzanitas.",
    content: `<p>Story by Aaron Fitch and Shelby Baker.</p>
      <p>Central Coast Wilds (CCW) is a wholesale and retail native plant nursery specialized in growing watershed specific plants for large scale habitat restoration projects and ecological landscapes. Our Research and Development (R&D) Department uses basic and applied research to gain a comprehensive understanding of detailed nursery production.</p>
      <h3>Sowing Oak Acorns</h3>
      <p>Here at CCW the most popular Oak species that we grow are Quercus agrifolia (Coast Live Oak) and Quercus lobata (Valley Oak). In one study, acorns with 4+ holes were less likely to germinate successfully than acorns with a couple or no holes. We hypothesize that the more holes an acorn had, the higher likelihood there was of the radicle or embryonic new shoot being damaged by the acorn grub inside.</p>
      <p>In a separate study, we concluded that the angle at which acorns are planted is significant. Acorns planted straight down were prone to getting stuck and curling inside the acorn. However, when planted on its side the percentage of acorns that were able to germinate were able to grow beyond the seed coat into healthy trees, mimicking what naturally occurs in nature.</p>
      <h3>Propagation from Cuttings</h3>
      <p>Arctostaphylos spp., manzanitas, are notoriously challenging to propagate through seeds. To produce manzanitas we use cuttings. We experimented with heel cuts vs straight cuts. The cuttings with heel cuts had a better success rate (48%) than the cutting with a straight cut (31%). Therefore, whenever possible we will use the heel cut method on manzanitas for cutting propagation.</p>`
  },
  {
    slug: "coastal-meadow-lawn-alternative",
    title: "Creating a Coastal Meadow/Lawn Alternative",
    date: "January 2020",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2020/Creating-a-Coastal-Meadow-Lawn-Alternative/Beautiful-Santa-Cruz-native-meadow-lawn-replacement.jpg",
    excerpt: "Replace thirsty lawns with beautiful coastal meadows that support local pollinators and require minimal water.",
    content: `<p>Story and photos by Zach Jordan.</p>
      <p>I started with an abandoned sod lawn in Capitola that had been taken over by Hypochaeris radicata (hairy cat's ear), Taraxacum officinale (dandelion), Cynodon dactylon (Bermuda grass), Oxalis pes-caprae (sourgrass). In the summer/fall it was quite ugly; just a sparse cover of dry weeds providing no value to wildlife or people.</p>
      <p>In the late fall of 2018, I began my native meadow/lawn restoration project. I collected some cardboard boxes for free and covered as much area as I could. Then I added about 1" of topsoil on top of the cardboard. Before the rains I seeded it with yarrow, Trifolium wormskioldii (perennial clover), and Agrostis pallens (seashore bentgrass). Slowly throughout the winter I planted the following from Central Coast Wilds: Agrostis pallens, Achillea millefolium (common yarrow), Phyla nodiflora (lippia), Fragaria chiloensis (Beach strawberry) and Trifolium wormskioldii.</p>
      <p>The War on Weeds is far from over, but I have seen tremendous progress within just one year. The lawn was mostly green all summer and fall and only needed to be irrigated a couple times during the hot, dry months for establishment. So far my mission to create a drought-tolerant meadow-y lawn that can handle moderate disturbance and use has been a success.</p>`
  },
  {
    slug: "from-weedy-mess-to-garden-oasis",
    title: "From Weedy Mess to Native Garden Oasis",
    date: "January 2020",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2020/From-Weedy-Mess-to-Native-Garden-Oasis/Cupertino-native-mulched-garden-in-bloom.jpg",
    excerpt: "A case study on using sheet mulching and native plantings to transform a neglected yard into a thriving ecosystem.",
    content: `<p>Story and photos by Jessica Calvillo.</p>
      <p>"I want to start a native garden but my area is covered in lawn/weeds. What should I do?" This is a common question I get asked by many new gardeners. The issue of tackling a thick carpet of weeds or lawn grass can often seem like a barrier. Some people call it the "lasagna method" or more commonly, "sheet mulching." Like the typical mulching method, sheet mulching uses the same concept of suppressing weeds but takes it to the next level while also feeding the soil.</p>
      <p><strong>Steps:</strong> Mow your lawn or weeds low. Dig a 3-inch trench along the edges. Water the area. Lay down overlapping cardboard (6 inches overlap). Spread 2 inches of compost. Add 3 inches of mulch over the top. Water it all in, and cut holes to plant your natives!</p>
      <p>In one of my previous gardens in Cupertino, the "lawn" was covered in 2 feet of weeds which I chopped down with my push mower and electric string trimmer. What was once all weeds became a lush butterfly haven with Lippia, Cleveland Sage, Common Yarrow, Farewell-to-Spring, California Poppy, Matilija Poppy, and California Fuchsia.</p>`
  },
  {
    slug: "fall-pruning-tips-tricks",
    title: "Fall Pruning: Tips and Tricks for the Changing Season",
    date: "October 2019",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2019/Fall-Pruning-Tips-and-Tricks/California-Fuchsia.jpg",
    excerpt: "How to tidy up your native garden and prepare it for winter dormancy and healthy spring growth.",
    content: `<p>Story by Jessica Calvillo.</p>
      <p>Fall is the perfect time for deadheading, structural pruning, and hard pruning. As our native plants prepare for winter dormancy, there are a few pruning tips and tricks for the changing season to help tidy up the garden and prepare it for healthy spring growth.</p>
      <p><strong>Deadheading:</strong> This is the act of removing old, spent flowers that have gone to seed. In cases where you have enough of a species, removing the seed heads before they drop will help to prevent unwanted spreading.</p>
      <p><strong>Structural pruning:</strong> Remove dead or dying branches, branches that rub against each other, and unwanted suckers. Always sanitize your tools between plants.</p>
      <p><strong>Hard pruning:</strong> Some species like California fuchsia and native sages benefit from being cut back hard in late fall. This promotes vigorous, bushy growth in spring.</p>`
  },
  {
    slug: "stevens-creek-restoration",
    title: "Habitat Restoration Success Along Stevens Creek",
    date: "September 2019",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2019/Stevens-Creek-Habitat-Restoration-Success/Stevens-Creek-corridor-park-after.jpg",
    excerpt: "A look at the multi-phase restoration project that transformed a riparian corridor into a vibrant sanctuary for wildlife.",
    content: `<p>Story by Ellen Uhler.</p>
      <p>The Stevens Creek Corridor Park restoration project spans 60 acres of upland oak woodland and riparian forest in Cupertino and Mountain View, providing essential habitat for wildlife and a place for the community to connect with nature. Over multiple phases, we installed over 20,000 native trees, shrubs, and ground covers along the creek banks.</p>
      <p>The project design included removing invasive species, grading bank contours to create more naturalistic channel shapes, and installing willow stakes and native riparian plantings to stabilize the banks. Years after planting, the corridor is now teeming with birds, butterflies, and native fish species.</p>`
  },
  {
    slug: "autumn-walk-native-garden",
    title: "An Autumn Walk Through a Native Garden",
    date: "September 2019",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2019/Autumn-Walk-in-Deanna-and-Aarons-California-Native-Garden/California-drought-tolerant-native-plants--pollinator-plants--Eriogonum-fasciculatum-(California-buckwheat)--Deanna-Giuliano-(botanist).jpg",
    excerpt: "Sauntering through a home garden designed with local micro-habitats for peak autumn beauty and wildlife engagement.",
    content: `<p>Story and photos by Deanna Giuliano.</p>
      <p>Explore the stunning fall colors of this California native home garden as California sunflower (Helianthus californicus), lavender asters, and California buckwheat (Eriogonum fasciculatum) attract late-season pollinators. This garden was planted with the concept of creating micro-habitats — each section mimics a different California ecosystem, from coastal sage scrub near the driveway to a mini oak woodland under the house eaves.</p>
      <p>Autumn is when the garden truly shines, with golden yellows, purples, and warm browns creating a tapestry of color that draws in everything from painted lady butterflies to hummingbirds.</p>`
  },
  {
    slug: "manzanita-diversity-california",
    title: "Manzanita Diversity in California",
    date: "August 2019",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2019/Manzanita-Diversity-in-California/Arctostaphylos-edmundsii--Manzanita--Bearberry--Little-Sur--coastal-scrub-habitat.jpg",
    excerpt: "California is home to the most diverse manzanita species in the world, thriving in everything from alpine heights to coastal fog.",
    content: `<p>Story by Maddie Ginn.</p>
      <p>With over 90 species and subspecies, the genus Arctostaphylos (manzanita) is a testament to California's remarkable geological and climatic diversity. California is home to the most diverse manzanita population in the world — no other region even comes close. They are found from alpine heights above 10,000 feet to foggy coastal bluffs just above sea level.</p>
      <p>Manzanitas form symbiotic mycorrhizal relationships with soil fungi, and many species are fire-adapted with basal burls or fire-activated seeds. Their evergreen foliage, sculptural branching, and smooth reddish bark make them popular in native landscaping. Certain species like Arctostaphylos silvicola and A. hookeri are extremely rare, endemic to very specific soil types like the Ben Lomond Sandhills.</p>
      <p>At CCW, we propagate manzanitas primarily from cuttings due to the difficulty of seed germination. We carry several species appropriate for gardens and restoration projects along the central coast.</p>`
  },
  {
    slug: "pre-delivery-pear-baiting",
    title: "Pre-Delivery Pear-baiting for Phytophthora",
    date: "August 2019",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2019/Pre-pear-for-Take-off-Pre-Delivery-Pear-baiting-for-Phytophthora-at-CCW/irrigating-containers-to-test-for-Phytophthora.jpg",
    excerpt: "Using pears as a bio-indicator to ensure our nursery stock is clean and free of catastrophic plant pathogens.",
    content: `<p>Story and photos by Maddie Ginn.</p>
      <p>At Central Coast Wilds nursery, we participate in the CalPhytos Best Management Practices (BMP) program. A critical step in our production pipeline is pre-delivery pear-bait testing for Phytophthora, a devastating group of water mold pathogens responsible for sudden oak death and other plant diseases.</p>
      <p>The pear-bait method involves placing unripe d'Anjou pears in recently irrigated plant containers. If Phytophthora is present in the soil, the zoospores are attracted to the pear tissue and cause visible lesions within a few days. These samples are sent to the California Department of Food and Agriculture for lab analysis.</p>
      <p>This testing ensures that every batch of plants leaving our nursery is free of harmful pathogens before they are outplanted in sensitive restoration sites across California's watersheds.</p>`
  },
  {
    slug: "dutchmans-pipe-pipevine-swallowtail",
    title: "California Dutchman's Pipe and the Pipevine Swallowtail",
    date: "July 2019",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2019/California-Dutchmans-Pipe-and-Pipevine-Swallowtail-Butterfly/stages-of-Pipevine-Swallowtail.jpg",
    excerpt: "Protecting the rare Pipevine Swallowtail butterfly by planting its exclusive host plant, the California Dutchman's Pipe.",
    content: `<p>Story by Jessica Calvillo.</p>
      <p>The California Dutchman's Pipe (Aristolochia californica) is a unique deciduous vine native to the oak woodlands and riparian areas of Northern and Central California. Its unusual pipe-shaped flowers, which bloom in January through April, are adapted to attract tiny pollinating flies.</p>
      <p>More importantly, this vine is the exclusive larval host plant for the Pipevine Swallowtail butterfly (Battus philenor). Without this plant, the butterfly cannot complete its life cycle. By planting Dutchman's pipe in your garden, you create a sanctuary for this stunning velvet-blue butterfly while supporting the native food web.</p>
      <p>The vine is deciduous and twines gracefully through trees and shrubs, making it an excellent choice for fences, arbors, or growing up through an existing native shrub.</p>`
  },
  {
    slug: "restoring-coastal-prairie-ucsc",
    title: "Restoring Coastal Prairie at UCSC Coastal Science Campus",
    date: "June 2019",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2019/Restoring-Coastal-Prairie-Habitat-at-UCSC-Coastal-Science-Campus/California-Coastal-Bluff-habitat--Eriophyllum-staechadifolium.jpg",
    excerpt: "A large-scale project involving over 100,000 native plants to restore one of California's most biologically diverse and dwindling ecosystems.",
    content: `<p>Story by CCW staff.</p>
      <p>In 2016, Central Coast Wilds began work on one of the largest ecological restoration projects on the central coast — restoring coastal prairie habitat at UCSC's Coastal Science Campus (formerly Long Marine Lab). The project involved installing over 100,000 native plants across multiple phases of work.</p>
      <p>After a wet winter, the coastal prairie is flourishing, with species like Eriophyllum staechadifolium, Erigeron glaucus, and Eriogonum latifolium providing habitat for native bumblebees, butterflies, and a host of other wildlife. The restored coastal bluffs now function as a living laboratory for students and researchers while protecting the shoreline from erosion.</p>`
  },
  {
    slug: "native-plants-shady-corners",
    title: "California Native Plants for Small Shady Corners",
    date: "June 2019",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2019/California-native-plants-for-small-shady-corners/Live-forevers--Dudleya.jpg",
    excerpt: "Exploring the diverse palette of shade-tolerant natives that thrive in the narrow nooks and dark edges of urban gardens.",
    content: `<p>Story and photos by Ellen Uhler.</p>
      <p>My husband and I rub elbows while gardening on our Oakland city lot, constantly looking for somewhere to put just one more plant. The small dark corners get planted simply because we have run out of other available spaces. Fortunately the plant palette is diverse, offering a never-ending exploration of our California native flora.</p>
      <p>Grey rush (Juncus patens) is the most shade and drought tolerant of the rushes and a workhorse in the native plant garden. Nettles (Urtica dioica) offer food, medicine and a security system all in one — plus they're a host plant for Red Admiral caterpillars.</p>
      <p>From the dense shade of redwood forests to the dappled edges of oak woodlands, there are many different combinations of light, moisture and substrate. By weaving these species into your landscape you increase biodiversity and add resilience to the web of life.</p>`
  },
  {
    slug: "advocate-for-wildflowers",
    title: "Being an Advocate for the Wildflowers",
    date: "April 2019",
    category: "Education",
    image: "http://www.centralcoastwilds.com/news/2019/Advocate-for-Wildflowers/dont-trample-california-poppies.jpg",
    excerpt: "Admiring California's super blooms responsibly to protect future seed banks and pollinator habitats.",
    content: `<p>Story by Jessica Calvillo.</p>
      <p>With super blooms attracting thousands of visitors to California's wildlands, it's vital to stay on trails and avoid picking flowers. When people trample wildflower fields for photos, they destroy the plants before they can set seed, reducing future blooms and eliminating crucial pollinator habitat.</p>
      <p>Be an advocate: stay on marked trails, don't pick flowers, share educational messages on social media, and support local conservation organizations working to protect California's natural heritage.</p>`
  },
  {
    slug: "jessicas-redwood-shade-garden",
    title: "Employee Garden: Jessica's Redwood Shade Garden",
    date: "March 2019",
    category: "Landscaping",
    image: "http://www.centralcoastwilds.com/news/2019/Emloyee-Garden-Jessica-Redwood-Shady-Garden/woodland-strawberries--red-fescue--redwood-sorrel-on-steps-to-prevent-erosion.jpg",
    excerpt: "A transformation from invasive veldtgrass to an ethereal woodland oasis using redwood-compatible native species.",
    content: `<p>Story and photos by Jessica Calvillo.</p>
      <p>When I moved into my Scotts Valley home, the shady areas under the towering redwoods were dominated by invasive veldtgrass. Through dedicated hand-weeding and strategic planting of shade-loving natives like wild ginger (Asarum caudatum), bleeding hearts (Dicentra formosa), redwood sorrel (Oxalis oregana), and woodland strawberry (Fragaria vesca), the space has been transformed into an ethereal woodland oasis.</p>
      <p>Red fescue (Festuca rubra) serves as a living mulch between stepping stones, while sword ferns (Polystichum munitum) and chain ferns (Woodwardia fimbriata) provide structure and year-round green. The garden is now a peaceful retreat that feels like a walk through the forest floor.</p>`
  },
  {
    slug: "san-lorenzo-estuary-restoration",
    title: "Volunteering with the San Lorenzo Estuary Restoration",
    date: "March 2019",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2019/San-Lorenzo-Estuary-Restoration-Jane-Mio/San-Lorenzo-Estuary-Restoration-l.jpg",
    excerpt: "Community-driven efforts to enhance and protect the flora and fauna of the San Lorenzo River's sensitive estuary habitat.",
    content: `<p>Story and photos by Jane Mio and CCW staff.</p>
      <p>The San Lorenzo Estuary Restoration project brings together dedicated volunteers to remove invasive plants and install natives along the banks of the San Lorenzo River estuary in Santa Cruz. This sensitive habitat provides critical resting and feeding grounds for migrating salmon, steelhead trout, and a variety of shorebirds.</p>
      <p>Volunteers remove invasive species like pampas grass, jubata grass, and ice plant, replacing them with native sedges, rushes, and riparian shrubs that stabilize the banks and provide cover for wildlife.</p>`
  },
  {
    slug: "bees-chance-yellow-faced-bumblebee",
    title: "Give Bees a Chance: The Yellow-Faced Bumblebee",
    date: "February 2019",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2019/Bombus-vosnesenskii-Yellow-Faced-Bumblebee/Bombus-vosnesenskii-Yellow-Faced-Bumblebee.jpg",
    excerpt: "The most common West Coast native bee is a champion pollinator with fascinating colony behaviors and buzz-pollination techniques.",
    content: `<p>Story by Maddie Ginn.</p>
      <p>The Yellow-Faced Bumblebee (Bombus vosnesenskii) is the most common native bee on the West Coast. These ground-nesting social bees are champion pollinators, using a technique called "buzz pollination" where they vibrate their flight muscles at a specific frequency to shake pollen loose from flowers — essential for crops like tomatoes, peppers, and blueberries.</p>
      <p>Queens emerge in early spring, found a colony in an abandoned rodent burrow or similar cavity, and raise workers through summer. By fall, new queens are produced and the old colony dies off. To invite them to your garden, plant yarrow (Achillea millefolium), California sages (Salvia spp.), and phacelia. Leave some areas of bare ground for nesting sites.</p>`
  },
  {
    slug: "guadalupe-river-innovative-restoration",
    title: "Innovative Restoration Along the Guadalupe River",
    date: "February 2019",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2019/Guadalupe-River-innovative-restoration/rainbow-trout-Oncorhynchus-mykiss.jpg",
    excerpt: "Using decompacted soil trenches and biochar to mitigate floods and revegetate the banks of a high-tech city's riparian highway.",
    content: `<p>Story by CCW staff.</p>
      <p>The Guadalupe River restoration project in San Jose tackles unique challenges of restoring a natural waterway in the heart of Silicon Valley. Years of urbanization left the river banks heavily compacted with degraded soils unable to support native vegetation.</p>
      <p>Our innovative approach uses decompacted soil trenches amended with biochar to create favorable growing conditions for native riparian species like Fremont cottonwood (Populus fremontii), arroyo willow (Salix lasiolepis), and California wild rose (Rosa californica). These trenches also function as bioswales, helping to capture and filter stormwater runoff. The project supports habitat for rainbow trout (Oncorhynchus mykiss) and other native aquatic species.</p>`
  },
  {
    slug: "toyon-plant-uses",
    title: "Toyon: A Plant of Many Names and Uses",
    date: "January 2019",
    category: "Plant Spotlight",
    image: "http://www.centralcoastwilds.com/news/2019/the-story-of-toyon/Heteromeles_arbutifolia.jpg",
    excerpt: "Often called 'California Holly,' the Toyon is a versatile native shrub with a rich cultural history and high wildlife value.",
    content: `<p>by Jessica Calvillo.</p>
      <p>If you are on the lookout for a plant that can provide your garden with color during the winter, then Toyon has you covered. This large, evergreen shrub, which also goes by the common name California Holly, deserves just as much fame as the city that was named after it, Hollywood. Before the city of Hollywood became what it is today, it was once home to populations of this holly-like shrub so dense they resembled a woodland, hence the name holly-wood.</p>
      <p>During the 1920s, California's Christmas Berry population was under threat due to the popularity of its clusters of bright red berries as Christmas decorations, which resulted in a law making collection of wild Christmas Berry illegal. For many indigenous communities, Toyon plays a significant role in traditional ethnobotanical practices, including making fruitcakes by boiling the raw berries to remove the astringent flavor.</p>
      <p>Not only in the wild but in gardens as well, Toyon can be seen providing sustenance to foraging wildlife such as mockingbirds, American robins, cedar waxwings and a vast array of native bees and butterflies. Due to its extensive natural range stretching from Northern California to Baja California, Toyon is quite popular for both residential gardens and habitat restoration.</p>`
  },
  {
    slug: "bear-creek-invasive-restoration",
    title: "Battling Invasive Species Along Bear Creek",
    date: "January 2019",
    category: "Restoration",
    image: "http://www.centralcoastwilds.com/news/2019/bear-creek-invasive-species/Redwood-forest-after-invasive-weeds-were-removed-by-Ecological-Concerns-Inc.jpg",
    excerpt: "A look at the organic, hand-removal methods used to protect the sensitive riparian habitat of Bear Creek from invasive plants.",
    content: `<p>by Jessica Calvillo.</p>
      <p>Meandering through the twists and turns of the Santa Cruz Mountains is Bear Creek, known for its Steelhead Trout (Oncorhynchus mykiss) spawning grounds and diverse native plant species. Stretching from the Bear Creek Redwoods Open Space Preserve and eventually uniting with the San Lorenzo River in Boulder Creek, this sensitive riparian habitat has been highlighted as under threat by invasive plant life.</p>
      <p>Starting in December 2017, our Ecological Concerns Inc. team took on the task of removing some of the Redwood forest's most invasive species: old growth English ivy (Hedera helix), Bigleaf Periwinkle (Vinca major), and French Broom (Genista monspessulana). With acute understanding of the sensitivity of this riparian habitat, the decision was made to approach the situation organically and without herbicides — all removal done entirely by hand.</p>
      <p>The creek, once suffocated by these invasive competitors, is now being given the chance to breathe and repopulate with persisting natives and the existing seed bank. As a community, we can do our part by abstaining from planting invasive species and opting for natives suitable to the surrounding ecosystem.</p>`
  },
  {
    slug: "bmp-success-ccw",
    title: "Best Management Practice Success at CCW",
    date: "January 2019",
    category: "Nursery News",
    image: "http://www.centralcoastwilds.com/news/2019/Best-Management-Practice-BMP-success-at-CCW/Best-Management-Practices-at-Central-Coast-Wilds-Nursery-in-January.jpg",
    excerpt: "A stringent set of clean production protocols ensures our nursery stock is free of destructive pathogens like Phytophthora.",
    content: `<p>Story by Maddie Ginn.</p>
      <p>At Central Coast Wilds, we follow Best Management Practices (BMP) as part of the CalPhytos program to prevent the spread of destructive plant pathogens like Phytophthora into California's wildlands. Our stringent BMP production protocols include heat sterilization of all growing media, table-top production to prevent soil splash contamination, and rigorous documentation at every stage.</p>
      <p>All propagation materials are carefully sourced and treated, and our staff receives specialized training in clean nursery practices. Every batch of plants undergoes quality control checks before leaving the nursery, ensuring that our restoration stock supports — rather than threatens — the health of California's native ecosystems.</p>`
  }
];
