export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "A Complete Guide to the Milford Sound Luxury Cruise",
    slug: "milford-sound-luxury-cruise-guide",
    excerpt: "Discover the breathtaking beauty of Fiordland National Park from the comfort of a luxury cruise. Everything you need to know for the ultimate New Zealand experience.",
    content: `
      Milford Sound is arguably the crown jewel of New Zealand's South Island, and there is no better way to experience it than on a luxury cruise. Known as the "eighth wonder of the world" by Rudyard Kipling, this pristine fjord offers towering peaks, cascading waterfalls, and incredible marine life.

      ### 1. What to Expect on Your Cruise
      From the moment you step on board, expect world-class hospitality. Enjoy gourmet dining options as you glide past iconic landmarks like Mitre Peak. The slower pace of a luxury vessel allows for an intimate encounter with the sheer scale of the fiord.

      ### 2. Wildlife Encounters
      Keep your camera ready! Milford Sound is home to bottlenose dolphins, New Zealand fur seals, and the rare Fiordland crested penguin. The captain will expertly navigate to give you the best views of these incredible creatures in their natural habitat.

      ### 3. The Power of Stirling Falls
      One of the highlights of the journey is getting up close to Stirling Falls, a majestic 151-meter waterfall. Feel the mist on your face—local legend says the glacial water makes you look 10 years younger!

      ### 4. Tips for the Best Experience
      Dress in layers, as the weather in Fiordland is notoriously unpredictable. Bring a rain jacket, even on sunny days, and make sure your camera is fully charged. 

      At Najaf Zohaib Travel & Tours, we seamlessly integrate this luxury experience into our premium South Island itineraries.
    `,
    author: "Najaf Zohaib",
    date: "May 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=1000",
    category: "New Zealand",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Queenstown Alpine Adventure: The Ultimate Thrill Seeker's Itinerary",
    slug: "queenstown-alpine-adventure",
    excerpt: "Explore the adventure capital of the world. From bungee jumping to serene alpine lakes, Queenstown offers the perfect blend of adrenaline and relaxation.",
    content: `
      Queenstown is synonymous with adventure. Nestled on the shores of the crystal-clear Lake Wakatipu and surrounded by the dramatic Remarkables mountain range, it is a destination that promises lifelong memories for thrill-seekers and nature lovers alike.

      ### 1. Bungee Jumping and Skydiving
      For the ultimate adrenaline rush, Queenstown is the birthplace of commercial bungee jumping. Take the leap at the historic Kawarau Bridge or go higher at the Nevis Bungee. If that's not enough, a tandem skydive over the alpine basin offers unparalleled views.

      ### 2. The Skyline Gondola
      For a slightly gentler thrill, take the Skyline Gondola up Bob's Peak. The panoramic views of Queenstown and Lake Wakatipu are spectacular. Don't forget to ride the luge tracks at the top!

      ### 3. Jet Boating on the Shotover River
      Experience the iconic Shotover Jet, a high-speed boat ride through narrow rocky canyons that will leave you breathless and exhilarating.

      ### 4. Unwinding in Luxury
      After a day of action, Queenstown offers exceptional fine dining and world-class Pinot Noir from the nearby Central Otago wine region. Let Najaf Zohaib Travel & Tours craft an itinerary that balances your need for speed with luxurious relaxation.
    `,
    author: "Zohaib Ahmed",
    date: "May 18, 2026",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1000",
    category: "Adventure",
    readTime: "6 min read"
  },
  {
    id: "3",
    title: "Rotorua Geothermal Experience: Nature's Spa",
    slug: "rotorua-geothermal-experience",
    excerpt: "Immerse yourself in the bubbling mud pools, erupting geysers, and rich Maori culture of Rotorua.",
    content: `
      Rotorua is a sensory experience unlike any other. Known for its geothermal activity and deep-rooted Maori heritage, it is a must-visit destination on New Zealand's North Island.

      ### 1. Geothermal Wonders
      Wai-O-Tapu Thermal Wonderland and Te Puia are home to dramatic geysers, vividly colored hot springs, and bubbling mud pools. The famous Pohutu Geyser erupts up to 20 times a day!

      ### 2. Maori Culture and Hangi
      Rotorua is the cultural heartland of New Zealand. Experience a traditional Maori welcome (Powhiri), witness the fearsome Haka, and enjoy a Hangi feast, where food is slow-cooked in an earth oven using geothermal heat.

      ### 3. Natural Spas
      Relax in the Polynesian Spa, where mineral-rich waters rejuvenate the body and mind while overlooking Lake Rotorua.

      Our tailored Rotorua packages ensure you experience both the explosive natural phenomena and the profound cultural heritage with absolute comfort.
    `,
    author: "Najaf Zohaib",
    date: "May 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Culture & Nature",
    readTime: "4 min read"
  },
  {
    id: "4",
    title: "Journey to Middle-earth: Hobbiton & Waitomo Caves",
    slug: "hobbiton-waitomo-caves",
    excerpt: "Step into a fantasy world with a visit to the Shire and explore the magical, glowworm-lit caverns of Waitomo.",
    content: `
      For fans of fantasy and natural wonders alike, the Waikato region offers two of New Zealand's most iconic experiences: the Hobbiton Movie Set and the Waitomo Glowworm Caves.

      ### 1. The Magic of Hobbiton
      Wander through the lush pastures of the Shire. See the Hobbit Holes, the Mill, and enjoy a complimentary beverage at the Green Dragon Inn. The attention to detail is astounding, making you feel as if you've truly stepped into Middle-earth.

      ### 2. The Luminous Waitomo Caves
      Beneath the rolling green hills lie the ancient Waitomo Caves. Glide silently on a boat through the Glowworm Grotto and marvel at thousands of tiny luminescent creatures lighting up the cave ceiling like a starry night sky.

      ### 3. A Perfect Day Trip
      These two attractions make for an unforgettable day trip. Our itineraries handle all the logistics, allowing you to seamlessly transition from cinematic fantasy to geological wonder.
    `,
    author: "Zohaib Ahmed",
    date: "May 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1000",
    category: "New Zealand",
    readTime: "5 min read"
  },
  {
    id: "5",
    title: "Glacier Heli-Hike Experience: Walking on Ancient Ice",
    slug: "glacier-heli-hike-experience",
    excerpt: "Take to the skies and land on the stunning Franz Josef Glacier for an unforgettable ice hiking experience.",
    content: `
      The West Coast of the South Island is wild, untamed, and home to the spectacular Franz Josef and Fox Glaciers. A Heli-Hike is the ultimate way to interact with these ancient rivers of ice.

      ### 1. The Scenic Flight
      Your adventure begins with a thrilling helicopter flight. Soaring above the rainforest, you'll get a bird's-eye view of the glacier's massive scale as it descends from the Southern Alps.

      ### 2. Exploring Ice Caves
      Once you land on the ice, expert guides will lead you through a constantly changing landscape of deep crevasses, towering ice pinnacles, and striking blue ice caves. 

      ### 3. Safe and Accessible
      With all equipment provided (crampons, boots, and waterproofs), this experience is accessible to anyone with a moderate level of fitness. 

      Let Najaf Zohaib Travel & Tours book this bucket-list experience as part of your premium South Island road trip.
    `,
    author: "Najaf Zohaib",
    date: "May 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&q=80&w=1000",
    category: "Adventure",
    readTime: "4 min read"
  },
  {
    id: "6",
    title: "Bay of Islands Sailing Retreat: A Coastal Paradise",
    slug: "bay-of-islands-sailing-retreat",
    excerpt: "Sail through 144 subtropical islands, swim with dolphins, and discover the historical birthplace of New Zealand.",
    content: `
      Located in the "Winterless North," the Bay of Islands is a stunning maritime playground boasting 144 islands, pristine beaches, and abundant marine life.

      ### 1. Sailing the Clear Waters
      Charter a luxury yacht or join a catamaran cruise. The calm, turquoise waters are perfect for sailing, kayaking, and paddleboarding.

      ### 2. The Hole in the Rock
      A cruise to the famous 'Hole in the Rock' on Motukokako Island is a must. If the tide and weather permit, the captain will navigate the ship right through the narrow rocky opening!

      ### 3. Waitangi Treaty Grounds
      Immerse yourself in history at Waitangi, the site where the founding document of New Zealand was signed. 

      A luxury sailing retreat in the Bay of Islands is the perfect, relaxing addition to any New Zealand vacation.
    `,
    author: "Najaf Zohaib",
    date: "May 1, 2026",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1000",
    category: "Relaxation",
    readTime: "5 min read"
  },
  {
    id: "7",
    title: "A Spiritual Journey: Preparing for Your Umrah",
    slug: "preparing-for-umrah-spiritual-journey",
    excerpt: "Practical tips and spiritual guidance for those planning their first Umrah pilgrimage.",
    content: `
      Umrah is a deeply personal and spiritual journey. Proper preparation — both physical and spiritual — ensures you can focus entirely on your worship and connection with the Divine.

      ### 1. Understand the Rites
      Take the time to learn the steps of Umrah, from assuming Ihram to the final Tawaf and Sa'i. Knowledge brings peace of mind during the pilgrimage.

      ### 2. Physical Readiness
      Umrah involves a significant amount of walking. We recommend starting a light walking routine a few weeks before your departure to build stamina.

      ### 3. The Essentials Pack
      Beyond your Ihram and comfortable footwear, don't forget essentials like unscented soap, a small prayer mat, and a reliable power bank.

      ### 4. Choose a Trusted Partner
      At Najaf Zohaib Travel & Tours, we specialize in premium Umrah packages, handling the logistics — visas, flights, and 5-star hotels near the Haram — so you can dedicate your heart entirely to the journey.
    `,
    author: "Zohaib Ahmed",
    date: "April 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000",
    category: "Spiritual",
    readTime: "5 min read"
  },
  {
    id: "8",
    title: "Singapore City Explorer: The Ultimate Futuristic Getaway",
    slug: "singapore-city-explorer",
    excerpt: "Discover the vibrant blend of cutting-edge architecture, lush gardens, and diverse culinary scenes in Singapore.",
    content: `
      Singapore is a city where the future meets tradition. Clean, efficient, and endlessly fascinating, it is a global hub that offers an unforgettable urban experience.

      ### 1. Gardens by the Bay
      Step into a sci-fi world with the Supertree Grove and the Cloud Forest. The nightly light and sound show is absolutely mesmerizing and not to be missed.

      ### 2. Cultural Enclaves
      Wander through Chinatown, Little India, and Kampong Glam. Each neighborhood offers a distinct cultural immersion, incredible street art, and mouth-watering street food.

      ### 3. Marina Bay Sands
      Experience luxury at its peak. Even if you aren't staying at the iconic hotel, a visit to the Skypark Observation Deck offers sweeping views of the city skyline.

      With our premium packages, experience the very best of Singapore's luxury, culture, and innovation.
    `,
    author: "Najaf Zohaib",
    date: "April 25, 2026",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "International",
    readTime: "4 min read"
  },
  {
    id: "9",
    title: "Malaysia Tropical Getaway: Culture, Cuisine, and Coasts",
    slug: "malaysia-tropical-getaway",
    excerpt: "From the bustling streets of Kuala Lumpur to the pristine beaches of Langkawi, Malaysia has it all.",
    content: `
      Malaysia is a vibrant melting pot of Malay, Chinese, and Indian cultures, offering an incredibly diverse travel experience that ranges from urban skyscrapers to dense rainforests.

      ### 1. Kuala Lumpur's Skyline
      Marvel at the Petronas Twin Towers, explore the bustling markets of Bukit Bintang, and take a trip to the magnificent Batu Caves just outside the city.

      ### 2. The Food Capital: Penang
      Known as the food capital of Malaysia, George Town in Penang is a UNESCO World Heritage site offering incredible street art and the best Char Kway Teow you will ever taste.

      ### 3. Langkawi's Beaches
      Unwind on the pristine beaches of Langkawi, take the SkyCab cable car for breathtaking views, and explore the ancient mangroves.

      Experience the magic of 'Truly Asia' with our expertly curated Malaysian itineraries.
    `,
    author: "Najaf Zohaib",
    date: "April 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=1000",
    category: "International",
    readTime: "5 min read"
  },
  {
    id: "10",
    title: "Thailand Island Paradise: A Guide to Phuket and Beyond",
    slug: "thailand-island-paradise",
    excerpt: "Crystal clear waters, vibrant nightlife, and serene temples make Thailand the ultimate tropical escape.",
    content: `
      Thailand's islands are world-renowned for their beauty, offering everything from luxury resorts to untouched jungle beaches.

      ### 1. The Magic of Phuket
      Phuket is the gateway to Thailand's southern beaches. Enjoy luxury beach clubs, visit the Big Buddha, and explore the vibrant night markets of Old Phuket Town.

      ### 2. Island Hopping
      Take a speedboat to the Phi Phi Islands, marvel at the limestone karsts of Phang Nga Bay, and snorkel in the crystal-clear waters of the Andaman Sea.

      ### 3. Thai Cuisine and Culture
      Indulge in authentic Pad Thai, relax with a traditional Thai massage, and experience the warmth of Thai hospitality.

      Let Najaf Zohaib Travel & Tours plan your perfect luxurious Thai getaway.
    `,
    author: "Zohaib Ahmed",
    date: "April 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "International",
    readTime: "4 min read"
  },
  {
    id: "11",
    title: "Baku Cultural Tour: Where East Meets West",
    slug: "baku-cultural-tour",
    excerpt: "Explore the fascinating contrasts of Azerbaijan's capital, from the ancient walled city to the ultra-modern Flame Towers.",
    content: `
      Baku, the capital of Azerbaijan, is a city of stunning contrasts. Perched on the Caspian Sea, it beautifully blends its ancient Silk Road history with futuristic architecture.

      ### 1. The Old City (Icherisheher)
      Step back in time in the UNESCO-listed Old City. Wander narrow cobblestone streets, visit the Maiden Tower, and explore the magnificent Palace of the Shirvanshahs.

      ### 2. The Flame Towers
      Dominating the skyline, the futuristic Flame Towers are a symbol of modern Baku. At night, they illuminate the city with mesmerizing LED displays resembling burning flames.

      ### 3. The Mud Volcanoes of Gobustan
      Just outside the city lies the Gobustan National Park, famous for its ancient rock carvings and bizarre, bubbling mud volcanoes.

      Baku is an emerging luxury destination. Discover it with our exclusive cultural packages.
    `,
    author: "Najaf Zohaib",
    date: "April 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=1000",
    category: "Culture",
    readTime: "4 min read"
  },
  {
    id: "12",
    title: "Maldives Luxury Overwater: The Ultimate Romantic Escape",
    slug: "maldives-luxury-overwater",
    excerpt: "Wake up to the sound of the ocean in your private overwater villa in the Maldives.",
    content: `
      The Maldives is the absolute pinnacle of tropical luxury. It is the perfect destination for honeymooners and those seeking unparalleled relaxation.

      ### 1. Overwater Villas
      There is nothing quite like stepping directly from your bedroom into a turquoise lagoon. Enjoy private infinity pools, glass floors, and absolute privacy.

      ### 2. World-Class Diving
      The coral reefs of the Maldives are teeming with life. Snorkel with manta rays, swim alongside whale sharks, and discover colorful coral gardens.

      ### 3. Barefoot Luxury
      Dine on private sandbanks, enjoy world-class spa treatments over the water, and watch breathtaking sunsets every single evening.

      Najaf Zohaib Travel & Tours partners with the finest Maldivian resorts to guarantee a flawless luxury experience.
    `,
    author: "Zohaib Ahmed",
    date: "April 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Relaxation",
    readTime: "4 min read"
  },
  {
    id: "13",
    title: "Sri Lanka Heritage & Nature: A Journey Through the Pearl of the Indian Ocean",
    slug: "sri-lanka-heritage-nature",
    excerpt: "Discover ancient temples, lush tea plantations, and wild elephants in beautiful Sri Lanka.",
    content: `
      Sri Lanka packs an incredible variety of experiences into a small island. From rich history to spectacular wildlife, it's a destination that captivates every traveler.

      ### 1. The Cultural Triangle
      Climb the iconic Sigiriya Rock Fortress, explore the ancient ruins of Polonnaruwa, and visit the sacred Temple of the Tooth in Kandy.

      ### 2. Tea Country Trails
      Take the famous scenic train ride from Kandy to Ella. Rolling green hills covered in tea plantations offer a cool, refreshing contrast to the coastal heat.

      ### 3. Wildlife Safaris
      Yala National Park offers one of the best chances in the world to spot leopards in the wild, alongside herds of elephants and diverse birdlife.

      Experience the vibrant culture and nature of Sri Lanka with our expertly guided tours.
    `,
    author: "Najaf Zohaib",
    date: "March 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1588598198321-9735fd52ad3d?auto=format&fit=crop&q=80&w=1000",
    category: "International",
    readTime: "5 min read"
  },
  {
    id: "14",
    title: "Dubai Desert Safari & City: Extravagance in the Emirates",
    slug: "dubai-desert-safari-city",
    excerpt: "Experience the ultimate contrast between the ultra-modern skyline of Dubai and the timeless beauty of the Arabian desert.",
    content: `
      Dubai is a city of superlatives. It is home to the tallest building, the largest mall, and some of the most luxurious hotels on the planet.

      ### 1. The Burj Khalifa and Dubai Mall
      Stand at the top of the world at the Burj Khalifa and watch the mesmerizing Dubai Fountains. Shop till you drop at the Dubai Mall, complete with an indoor aquarium.

      ### 2. The Desert Safari
      Leave the glitz of the city for the golden dunes. Enjoy thrilling dune bashing, ride a camel, and experience a traditional Bedouin camp dinner under the stars.

      ### 3. Old Dubai
      Take an abra across Dubai Creek and wander through the Gold and Spice Souks for a taste of the city's trading history.

      Our Dubai packages combine high-end luxury with authentic Arabian adventures.
    `,
    author: "Zohaib Ahmed",
    date: "March 22, 2026",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "International",
    readTime: "4 min read"
  },
  {
    id: "15",
    title: "Europe Highlights Tour: A Continental Masterpiece",
    slug: "europe-highlights-tour",
    excerpt: "From the romance of Paris to the history of Rome, experience the best of Europe in one unforgettable journey.",
    content: `
      A grand tour of Europe is a dream for many. Our Europe Highlights package is designed to give you a taste of the continent's most iconic cities without the stress of planning.

      ### 1. Paris, France
      Stroll along the Seine, marvel at the Eiffel Tower, and immerse yourself in the art of the Louvre. 

      ### 2. Interlaken, Switzerland
      Breathe in the fresh Alpine air. Switzerland offers dramatic mountain scenery, serene lakes, and the perfect opportunity to ride the Glacier Express.

      ### 3. Rome, Italy
      Step back into antiquity at the Colosseum, make a wish at the Trevi Fountain, and enjoy the world's best pasta and gelato.

      Travel seamlessly across borders with Najaf Zohaib Travel & Tours handling every detail of your European escape.
    `,
    author: "Najaf Zohaib",
    date: "March 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "International",
    readTime: "6 min read"
  },
  {
    id: "16",
    title: "London City Break: Royal Parks and Historic Landmarks",
    slug: "london-city-break",
    excerpt: "Immerse yourself in the rich history, world-class museums, and diverse culture of London.",
    content: `
      London is a dynamic metropolis that effortlessly blends centuries of history with cutting-edge modern culture.

      ### 1. The Royal Landmarks
      Witness the Changing of the Guard at Buckingham Palace, visit the historic Tower of London, and gaze up at the iconic Big Ben and Houses of Parliament.

      ### 2. World-Class Museums
      London is home to some of the finest museums in the world, including the British Museum and the Natural History Museum—many of which offer free entry!

      ### 3. Shopping and Theatre
      Catch a spectacular show in the West End, shop along Oxford Street, or explore the eclectic markets of Camden and Notting Hill.

      Our tailored London packages ensure you stay in the heart of the action with priority access to top attractions.
    `,
    author: "Zohaib Ahmed",
    date: "March 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=1000",
    category: "International",
    readTime: "4 min read"
  },
  {
    id: "17",
    title: "Maldives Beach Getaway: Sun, Sand, and Serenity",
    slug: "maldives-beach-getaway",
    excerpt: "Leave the world behind and step onto the powdery white sands of your own private Maldivian island resort.",
    content: `
      If your idea of the perfect vacation involves nothing but white sand, swaying palm trees, and warm Indian Ocean waters, the Maldives Beach Getaway is for you.

      ### 1. Beachfront Luxury
      Stay in a luxurious beach villa where the ocean is just steps from your bed. Enjoy outdoor showers, private plunge pools, and uninterrupted ocean views.

      ### 2. Rejuvenation
      The Maldives is renowned for its wellness offerings. Indulge in traditional Ayurvedic massages and spa treatments designed to completely relax the body and mind.

      ### 3. Culinary Delights
      Dine under the stars with your toes in the sand, enjoying fresh seafood and world-class international cuisine prepared by top chefs.

      Let Najaf Zohaib Travel & Tours craft your ultimate relaxing beach holiday.
    `,
    author: "Najaf Zohaib",
    date: "March 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Relaxation",
    readTime: "4 min read"
  }
];
