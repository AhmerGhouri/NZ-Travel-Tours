export interface TourSeo {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  fullContent: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  targetKeywords: string[];
  imageAltTags: string[];
}

export const tourSeoContent: Record<string, TourSeo> = {
  "1": {
    seoTitle: "Milford Sound Luxury Cruise Package | NZ Travel & Tours",
    metaDescription: "Experience Milford Sound on a luxury cruise with NZ Travel & Tours. Scenic fjords, waterfalls, wildlife, and premium comfort await you.",
    h1: "Milford Sound Luxury Cruise Tour Package",
    fullContent: "Milford Sound is hands-down one of New Zealand's most jaw-dropping natural wonders — the kind of place where you round a corner and genuinely gasp. Towering cliffs rise straight out of dark, mirror-still water, waterfalls tumble hundreds of metres into the fjord, and if you're lucky, you'll spot dolphins riding the bow wave of your cruise.\n\nOur Milford Sound Luxury Cruise package gives you the premium way to experience it all. Skip the crowded budget boats — you'll enjoy spacious decks, expert commentary from a local naturalist, and a gourmet lunch featuring South Island produce. Most cruises run between 1.5 and 2.5 hours, which is just enough time to take in Stirling Falls, the Pembroke Glacier, and the resident fur seal colony at Seal Rock.\n\nAt NZ Travel & Tours (Najaf Zohaib Travel & Tours), we handle the logistics so you can focus on soaking it all in. We'll sort your transport from Queenstown or Te Anau, recommend the best time of year for your visit, and build a complete itinerary around your Milford Sound day.",
    highlights: ["Scenic fjords and waterfall views", "Wildlife spotting — dolphins, seals, penguins", "Luxury cruise comfort with gourmet dining", "One of New Zealand's top natural attractions"],
    faqs: [
      { question: "How long is the Milford Sound cruise?", answer: "Most cruises run between 1.5 and 2.5 hours, depending on the operator and route chosen." },
      { question: "What is the best time to visit Milford Sound?", answer: "Milford Sound is stunning year-round. Summer (Dec–Feb) offers the clearest skies, while rainy days actually create hundreds of temporary waterfalls — equally spectacular." }
    ],
    targetKeywords: ["Milford Sound cruise package", "Milford Sound luxury tour", "New Zealand fjord cruise"],
    imageAltTags: ["Milford Sound cruise scenic view", "Milford Sound waterfall tour", "Luxury cruise Milford Sound New Zealand"]
  },
  "2": {
    seoTitle: "Queenstown Alpine Adventure Package | NZ Travel & Tours",
    metaDescription: "Book a Queenstown Alpine Adventure with NZ Travel & Tours. Mountains, lakes, gondola rides, and heart-pumping activities in NZ's adventure capital.",
    h1: "Queenstown Alpine Adventure Tour Package",
    fullContent: "There's a reason Queenstown gets called the adventure capital of the world — and it's not just marketing hype. Nestled between the Remarkables mountain range and the deep blue of Lake Wakatipu, this compact town packs more adrenaline per square kilometre than anywhere else on Earth.\n\nOur Queenstown Alpine Adventure package is built for travellers who want the full experience. Think sunrise gondola rides with panoramic views that stretch to Cecil Peak, afternoon hikes through ancient beech forest, and evenings spent in Queenstown's buzzy restaurant scene. If you want to dial up the intensity, we can add bungy jumping, jet boating, or a scenic helicopter flight over the Remarkables.\n\nWhether you're visiting as a couple, a group of mates, or a solo explorer, this package flexes to suit your pace. We'll tailor the itinerary around your interests and fitness level, so you get exactly the Queenstown trip you've been picturing.",
    highlights: ["Scenic mountain and lake experiences", "Skyline Gondola and panoramic viewpoints", "Adventure activities — bungy, jet boat, heli-flights", "Perfect for couples, groups, and solo travellers"],
    faqs: [
      { question: "What is Queenstown famous for?", answer: "Queenstown is world-famous for adventure sports like bungy jumping and jet boating, plus its stunning alpine scenery around Lake Wakatipu and the Remarkables." },
      { question: "Is Queenstown good for a honeymoon?", answer: "Absolutely — it's one of New Zealand's most romantic destinations, with luxury lodges, fine dining, and sunset lake cruises on the TSS Earnslaw." }
    ],
    targetKeywords: ["Queenstown adventure package", "Queenstown alpine tour", "Queenstown tour package New Zealand"],
    imageAltTags: ["Queenstown alpine mountain view", "Skyline gondola Queenstown ride", "Lake Wakatipu Queenstown scenery"]
  },
  "3": {
    seoTitle: "Rotorua Geothermal Experience Package | NZ Travel & Tours",
    metaDescription: "Explore Rotorua's geothermal wonders with NZ Travel & Tours. Hot springs, mud pools, Māori culture, and thermal parks await.",
    h1: "Rotorua Geothermal Experience Tour Package",
    fullContent: "You'll smell Rotorua before you see it — and that's part of the charm. This North Island city sits right on top of one of the world's most active geothermal zones, which means bubbling mud pools, steaming vents, and natural hot springs are literally part of the landscape.\n\nOur Rotorua Geothermal Experience takes you beyond the sulphur selfies. You'll visit Wai-O-Tapu's technicolour thermal pools (the Champagne Pool is otherworldly), walk through the Redwoods — a cathedral-like forest with elevated treewalks — and experience an authentic Māori cultural evening complete with hāngī feast and traditional kapa haka performance.\n\nRotorua is also surprisingly family-friendly, with attractions ranging from mountain biking trails to the Polynesian Spa's lakeside hot pools. We'll build your itinerary around what matters most to your group.",
    highlights: ["Hot springs and geothermal parks", "Māori culture and traditional experiences", "Redwoods forest exploration", "Relaxation and scenic sightseeing"],
    faqs: [
      { question: "What is Rotorua known for?", answer: "Rotorua is known for its geothermal activity — hot springs, geysers, mud pools — and its deep connection to Māori heritage and culture." },
      { question: "Is Rotorua good for family travel?", answer: "Yes! It has family-friendly attractions like the Redwoods Treewalk, Skyline luge, farm shows, and gentle hot pool experiences suitable for all ages." }
    ],
    targetKeywords: ["Rotorua geothermal tour", "Rotorua travel package", "Rotorua hot springs tour"],
    imageAltTags: ["Rotorua geothermal mud pools", "Rotorua hot springs travel experience", "Rotorua Māori cultural village"]
  },
  "4": {
    seoTitle: "Hobbiton & Waitomo Caves Tour Package | NZ Travel & Tours",
    metaDescription: "Explore Hobbiton movie set and Waitomo Glowworm Caves with NZ Travel & Tours. Scenic countryside, underground adventures, and movie magic.",
    h1: "Hobbiton & Waitomo Caves Tour Package",
    fullContent: "Even if you've never watched a single Lord of the Rings film, stepping into Hobbiton is a genuinely magical experience. The movie set has been preserved in full — 44 hobbit holes dot the rolling green hillside of a working sheep farm near Matamata, and the attention to detail is remarkable. Tiny gardens, round doors, washing lines — it all feels impossibly real.\n\nPair that with Waitomo's famous Glowworm Caves and you've got one of the best day trips in New Zealand. The caves are ancient limestone formations, but the real showstopper is the glowworm grotto. You'll glide through on a boat in near-total silence while thousands of tiny bioluminescent creatures light up the ceiling like a starry sky.\n\nOur Hobbiton & Waitomo package handles all the logistics — transport from Auckland or Hamilton, timed entry tickets, and a smooth itinerary that lets you enjoy both attractions without rushing.",
    highlights: ["Hobbiton movie set walking tour", "Waitomo Glowworm Caves boat ride", "Scenic Waikato countryside drive", "Perfect for families and movie fans"],
    faqs: [
      { question: "Is Hobbiton worth visiting if I haven't watched Lord of the Rings?", answer: "Definitely. The craftsmanship, gardens, and rolling countryside make it a beautiful attraction regardless of your film knowledge." },
      { question: "Are Waitomo caves safe for kids?", answer: "Yes — the standard cave tour is gentle, guided, and suitable for children. No climbing or swimming required." }
    ],
    targetKeywords: ["Hobbiton tour package", "Waitomo caves tour", "glowworm caves New Zealand"],
    imageAltTags: ["Hobbiton movie set tour", "Waitomo glowworm caves New Zealand", "Hobbiton green hills scenery"]
  },
  "5": {
    seoTitle: "Glacier Heli-Hike Experience | NZ Travel & Tours",
    metaDescription: "Helicopter glacier hiking in New Zealand with NZ Travel & Tours. Fly over ice fields, hike ancient glaciers, and see formations few ever reach.",
    h1: "Glacier Heli-Hike Experience Tour Package",
    fullContent: "This is the trip your friends will ask you about for years. A helicopter lifts you above the rainforest canopy and deposits you directly onto the glacier — no hours of hiking to reach the ice. From there, a professional guide leads you through a landscape of blue ice caves, deep crevasses, and frozen pinnacles that most people only see in documentaries.\n\nThe Glacier Heli-Hike works at both Franz Josef and Fox Glacier on the South Island's West Coast. The helicopter ride alone is worth the trip — sweeping views of ice fields flowing down between mountain peaks into temperate rainforest. It's a combination you won't find anywhere else on Earth.\n\nNo previous hiking experience is needed. Your guide provides crampons, gear, and a safety briefing before you set foot on the ice. Basic fitness is all that's required — if you can walk for two hours on uneven ground, you'll manage perfectly.",
    highlights: ["Scenic helicopter ride to the glacier", "Guided ice hiking with professional gear", "Blue ice caves and crevasse exploration", "Suitable for beginners with basic fitness"],
    faqs: [
      { question: "Is glacier heli-hiking safe?", answer: "Yes. All trips are led by certified glacier guides with full safety gear provided. Weather conditions are assessed before every flight." },
      { question: "Do I need hiking experience?", answer: "No — basic fitness is enough. Guides provide crampons, jackets, and a thorough safety briefing before you step onto the ice." }
    ],
    targetKeywords: ["Glacier heli hike New Zealand", "heli hike package", "New Zealand glacier tour"],
    imageAltTags: ["New Zealand glacier heli hike", "Helicopter glacier tour experience", "Glacier hiking adventure NZ"]
  },
  "6": {
    seoTitle: "Bay of Islands Sailing Retreat Package | NZ Travel & Tours",
    metaDescription: "Sail the Bay of Islands with NZ Travel & Tours. Crystal-clear waters, island hopping, dolphins, and peaceful coastal relaxation in Northland.",
    h1: "Bay of Islands Sailing Retreat Tour Package",
    fullContent: "The Bay of Islands is where New Zealanders go when they need to exhale. 144 subtropical islands scattered across turquoise water, each with its own white-sand beach, rocky cove, or pohutukawa-lined shore. It's the kind of place where your biggest decision is whether to swim before or after lunch.\n\nOur Sailing Retreat package puts you on the water — the best way to experience the Bay. You'll island-hop by yacht or catamaran, swim in secluded bays, and keep an eye out for the resident pod of bottlenose dolphins that regularly surf the wake. On land, there's the historic Waitangi Treaty Grounds, the charming town of Russell, and some excellent local seafood.\n\nThis package suits couples looking for a romantic escape, families wanting a beach holiday with a difference, or groups of friends who just want to unplug. We'll match you with the right vessel and crew for your group size.",
    highlights: ["Sailing experience across 144 islands", "Island hopping and secluded beach visits", "Dolphin encounters and marine wildlife", "Perfect for couples, families, and groups"],
    faqs: [
      { question: "What is Bay of Islands famous for?", answer: "It's famous for sailing, dolphin watching, beautiful beaches, and its historical significance as the birthplace of modern New Zealand at the Waitangi Treaty Grounds." },
      { question: "How many days are enough for Bay of Islands?", answer: "2 to 4 days gives you time to sail, explore islands, visit Waitangi, and enjoy the local food scene without rushing." }
    ],
    targetKeywords: ["Bay of Islands tour package", "Bay of Islands sailing retreat", "New Zealand coastal tour"],
    imageAltTags: ["Bay of Islands sailing tour", "Bay of Islands beach view", "New Zealand island hopping retreat"]
  },
  "7": {
    seoTitle: "Spiritual Umrah Journey Package | NZ Travel & Tours (Najaf Zohaib)",
    metaDescription: "Plan your Umrah journey with NZ Travel & Tours. Reliable travel planning, hotel guidance, and complete support for a peaceful pilgrimage.",
    h1: "Spiritual Umrah Journey Package",
    fullContent: "Umrah is one of the most meaningful journeys a person can make, and getting the travel logistics right matters deeply. You want to focus on the spiritual experience — not worry about hotel bookings, transport schedules, or visa paperwork.\n\nOur Spiritual Umrah Journey package is designed around peace of mind. We help you plan every practical detail: flights, accommodation near the Haram, ground transport between Makkah and Madinah, and a clear day-by-day schedule that balances worship time with rest. We've helped families, elderly travellers, and first-time pilgrims complete their Umrah smoothly and comfortably.\n\nAt NZ Travel & Tours (Najaf Zohaib Travel & Tours), we understand the importance of this journey. Our planning process is respectful, thorough, and focused on making your pilgrimage as seamless as possible.",
    highlights: ["Complete Umrah travel planning and support", "Hotel and transport coordination", "Suitable for families and elderly travellers", "Respectful, experienced guidance throughout"],
    faqs: [
      { question: "What is included in an Umrah package?", answer: "Typically flights, hotel accommodation near the Haram, ground transport between Makkah and Madinah, and itinerary planning support." },
      { question: "How many days are ideal for Umrah?", answer: "7 to 14 days depending on your schedule and whether you want extra time in Madinah for ziyarat." }
    ],
    targetKeywords: ["Umrah package", "Umrah travel agency", "Umrah journey package"],
    imageAltTags: ["Umrah pilgrimage journey", "Makkah Masjid al Haram travel", "Madinah spiritual visit package"]
  },
  "8": {
    seoTitle: "Singapore City Explorer Package | NZ Travel & Tours",
    metaDescription: "Explore Singapore with NZ Travel & Tours. Marina Bay Sands, Gardens by the Bay, Sentosa Island, hawker food, and world-class shopping.",
    h1: "Singapore City Explorer Tour Package",
    fullContent: "Singapore punches way above its weight for a city-state smaller than most NZ national parks. In three to five days you can experience futuristic architecture at Marina Bay, wander through the otherworldly Supertree Grove at Gardens by the Bay, ride roller coasters on Sentosa Island, and eat your way through some of the best hawker centres in Asia — all connected by a spotlessly clean MRT system.\n\nOur Singapore City Explorer package is built for efficiency without sacrificing enjoyment. We map out the must-sees, suggest the hidden gems (Tiong Bahru's cafe scene, the Haji Lane street art), and recommend the best times to visit each attraction to dodge the crowds.\n\nSingapore works brilliantly for families, couples, and business travellers adding a few leisure days. The city is safe, walkable, and endlessly photogenic.",
    highlights: ["Marina Bay Sands and city skyline experience", "Gardens by the Bay and Supertree Grove", "Sentosa Island entertainment and beaches", "World-class hawker food and shopping"],
    faqs: [
      { question: "How many days are enough for Singapore?", answer: "3 to 5 days covers the major attractions comfortably, with time for shopping and food exploration." },
      { question: "Is Singapore suitable for a honeymoon?", answer: "Yes — rooftop bars, luxury hotels, and romantic dining make Singapore an excellent honeymoon add-on, especially combined with a beach destination like Maldives." }
    ],
    targetKeywords: ["Singapore tour package", "Singapore city tour", "Singapore holiday package"],
    imageAltTags: ["Marina Bay Sands Singapore skyline", "Gardens by the Bay Singapore night view", "Sentosa Island Singapore tour"]
  },
  "9": {
    seoTitle: "Malaysia Tropical Getaway Package | NZ Travel & Tours",
    metaDescription: "Explore Malaysia with NZ Travel & Tours. Kuala Lumpur, Langkawi beaches, cultural markets, temples, and incredible street food.",
    h1: "Malaysia Tropical Getaway Tour Package",
    fullContent: "Malaysia is one of those destinations that gives you extraordinary value without cutting corners on experience. Kuala Lumpur's Petronas Towers and Batu Caves sit alongside colonial-era architecture and some of the best street food in Southeast Asia. Head to Langkawi or the Perhentian Islands and you'll find beaches that rival the Maldives at a fraction of the cost.\n\nOur Malaysia Tropical Getaway combines city buzz with island relaxation. You'll explore KL's vibrant markets, taste your way through Jalan Alor's hawker stalls, and then escape to a tropical island for swimming, snorkelling, and sunsets. It's the perfect balance of culture and downtime.\n\nMalaysia is exceptionally family-friendly, very affordable, and easy to navigate. English is widely spoken, the food is incredible, and the people are genuinely warm.",
    highlights: ["Kuala Lumpur city exploration and Petronas Towers", "Tropical beach escapes on Langkawi or Perhentians", "Cultural food tours and night markets", "Outstanding value for families and couples"],
    faqs: [
      { question: "What is Malaysia famous for?", answer: "Malaysia is famous for its diverse food culture, the Petronas Twin Towers, tropical islands, Batu Caves, and a unique blend of Malay, Chinese, and Indian cultures." },
      { question: "Is Malaysia affordable for tourists?", answer: "Very much so — it's one of the best-value destinations in Asia, with excellent food, accommodation, and transport at budget-friendly prices." }
    ],
    targetKeywords: ["Malaysia tour package", "Malaysia holiday deal", "Malaysia tropical getaway"],
    imageAltTags: ["Kuala Lumpur city skyline view", "Malaysia tropical island beach", "Malaysia travel and shopping tour"]
  },
};
