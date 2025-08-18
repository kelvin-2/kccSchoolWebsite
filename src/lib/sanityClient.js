// sanityClient.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'e45g7oig',      // your project ID
  dataset: 'production',
  apiVersion: '2023-08-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN
 
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

