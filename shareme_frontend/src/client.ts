import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

let projectId = "";
let token = "";
if (import.meta.env.MODE === "development") {
    projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    token = import.meta.env.VITE_SANITY_TOKEN;
}
else {
    projectId = "lrpyj2ae";
    token = "skWZYIPMbgQ1fRXoHXqKZ7nE1Mb7Owhew7StPKrTlNOvJRGBMEOI015zEmWtZQuntyfHyVWIeNKoTLmtQg5vzXkfKSwvDZjSKu1C75DGjaqX5LQojXby7Cl7v7B79OSiwUvkJUKCZ7HBLbSzBrcFNrrhCHPxDrhyUGRIJZJTotwIBfWAX2rU";
}
export const client = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
