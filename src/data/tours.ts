export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  imageUrl: string;
  rating: number;
  region: 'North Island' | 'South Island' | 'Both';
  durationDays: number;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Milford Sound Luxury Cruise",
    location: "Fiordland National Park",
    duration: "3 Days / 2 Nights",
    price: 1250,
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010f4aa2af5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1542317826-64670275817c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
  }
];
