/** Builds an Unsplash CDN URL. next/image appends width and quality itself. */
export function unsplash(photoId: string): string {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop`;
}
