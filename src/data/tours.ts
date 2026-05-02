export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  imageUrl: string;
  rating: number;
  region: 'North Island' | 'South Island' | 'Both' | 'International';
  durationDays: number;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Milford Sound Luxury Cruise",
    location: "Fiordland National Park",
    duration: "3 Days / 2 Nights",
    price: 1250,
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    region: 'South Island',
    durationDays: 3
  },
  {
    id: "2",
    title: "Queenstown Alpine Adventure",
    location: "Queenstown",
    duration: "5 Days / 4 Nights",
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1589802829985-817e511f1b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    region: 'South Island',
    durationDays: 5
  },
  {
    id: "3",
    title: "Rotorua Geothermal Experience",
    location: "Rotorua",
    duration: "2 Days / 1 Night",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    region: 'North Island',
    durationDays: 2
  },
  {
    id: "4",
    title: "Hobbiton & Waitomo Caves",
    location: "Waikato",
    duration: "1 Day",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1469521669194-babbdf900920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    region: 'North Island',
    durationDays: 1
  },
  {
    id: "5",
    title: "Glacier Heli-Hike Experience",
    location: "Franz Josef Glacier",
    duration: "2 Days / 1 Night",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1578339843615-188ccdf19363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 5.0,
    region: 'South Island',
    durationDays: 2
  },
  {
    id: "6",
    title: "Bay of Islands Sailing Retreat",
    location: "Northland",
    duration: "4 Days / 3 Nights",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1505881504787-8df1a7dd0b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    region: 'North Island',
    durationDays: 4
  },
  {
    id: "7",
    title: "Spiritual Umrah Journey",
    location: "Saudi Arabia",
    duration: "14 Days / 13 Nights",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1565552643981-d2bd4e93175c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 5.0,
    region: 'International',
    durationDays: 14
  },
  {
    id: "8",
    title: "Singapore City Explorer",
    location: "Singapore",
    duration: "4 Days / 3 Nights",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    region: 'International',
    durationDays: 4
  },
  {
    id: "9",
    title: "Malaysia Tropical Getaway",
    location: "Malaysia",
    duration: "6 Days / 5 Nights",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    region: 'International',
    durationDays: 6
  },
  {
    id: "10",
    title: "Thailand Island Paradise",
    location: "Thailand",
    duration: "7 Days / 6 Nights",
    price: 1300,
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    region: 'International',
    durationDays: 7
  },
  {
    id: "11",
    title: "Baku Cultural Tour",
    location: "Azerbaijan",
    duration: "5 Days / 4 Nights",
    price: 1050,
    imageUrl: "https://images.unsplash.com/photo-1627885375549-b52bfa7c7fa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    region: 'International',
    durationDays: 5
  },
  {
    id: "12",
    title: "Maldives Luxury Overwater",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 5.0,
    region: 'International',
    durationDays: 5
  },
  {
    id: "13",
    title: "Sri Lanka Heritage & Nature",
    location: "Sri Lanka",
    duration: "8 Days / 7 Nights",
    price: 1450,
    imageUrl: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    region: 'International',
    durationDays: 8
  },
  {
    id: "14",
    title: "Dubai Desert Safari & City",
    location: "United Arab Emirates",
    duration: "5 Days / 4 Nights",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    region: 'International',
    durationDays: 5
  },
  {
    id: "15",
    title: "Europe Highlights Tour",
    location: "Europe",
    duration: "14 Days / 13 Nights",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    region: 'International',
    durationDays: 14
  },
  {
    id: "16",
    title: "London City Break",
    location: "United Kingdom",
    duration: "4 Days / 3 Nights",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-5969336ac1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    region: 'International',
    durationDays: 4
  }
];
