import { tours, Tour } from '@/data/tours';
import { sanityFetch } from './sanity';

const isSanityConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id';

/**
 * Headless CMS data layer (Sanity Integration).
 * Automatically falls back to local tours.ts if Sanity is not configured.
 */

/**
 * Helper: merge local data into Sanity results.
 * Sanity may still store old USD values for price, and may
 * have missing image assets. We always override with the
 * converted PKR price and fallback imageUrl from tours.ts.
 */
function mergeLocalData(tour: Tour): Tour {
  const local = tours.find((t) => t.id === tour.id);
  if (!local) return tour;
  return {
    ...tour,
    price: local.price,
    imageUrl: tour.imageUrl || local.imageUrl,
  };
}

export async function getTours(): Promise<Tour[]> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "tour"] {
        "id": coalesce(id, _id),
        title,
        location,
        duration,
        price,
        "imageUrl": image.asset->url,
        rating,
        region,
        durationDays,
        description
      }`;
      const sanityTours = await sanityFetch<Tour[]>({ query });
      return sanityTours.map(mergeLocalData);
    } catch (error) {
      console.error('Sanity fetch error, falling back to local data:', error);
    }
  }
  
  // Simulate network delay for local data
  await new Promise((resolve) => setTimeout(resolve, 100));
  return tours;
}

export async function getTourById(id: string): Promise<Tour | undefined> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "tour" && (id == $id || _id == $id)][0] {
        "id": coalesce(id, _id),
        title,
        location,
        duration,
        price,
        "imageUrl": image.asset->url,
        rating,
        region,
        durationDays,
        description
      }`;
      const sanityTour = await sanityFetch<Tour>({ query, params: { id } });
      return sanityTour ? mergeLocalData(sanityTour) : undefined;
    } catch (error) {
      console.error('Sanity fetch error for ID, falling back to local data:', error);
    }
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 50));
  return tours.find((t) => t.id === id);
}

export async function getFeaturedTours(): Promise<Tour[]> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "tour" && featured == true] | order(_createdAt desc) [0...3] {
        "id": coalesce(id, _id),
        title,
        location,
        duration,
        price,
        "imageUrl": image.asset->url,
        rating,
        region,
        durationDays
      }`;
      const featured = await sanityFetch<Tour[]>({ query });
      if (featured.length > 0) return featured.map(mergeLocalData);
    } catch (error) {
      console.error('Sanity fetch error for featured, falling back to local data:', error);
    }
  }

  const allTours = await getTours();
  return allTours.slice(0, 3);
}

export async function getToursByRegion(region: string): Promise<Tour[]> {
  const allTours = await getTours();
  if (region === 'All Destinations') return allTours;
  return allTours.filter((t) => t.region === region);
}
