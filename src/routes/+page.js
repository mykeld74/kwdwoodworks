import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "product"] | order(order asc){
			_id,
			title,
			desc,
			slug,
			"additionalImages": images[].asset->originalFilename,
			"featuredImageUrl": featuredImage.public_id,
			categories[]->{title, "slug":slug.current, parents[]->{title, "slug":slug.current}},
		}`;
	const Products = await client.fetch(query);
	return { Products };
}
