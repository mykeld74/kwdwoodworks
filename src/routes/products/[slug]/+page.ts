import client from '$lib/client';
import { page } from '$app/stores';
export const prerender = true;

//get page params
export async function load({ params }) {
	const { slug } = params;
	const query = `*[_type == "product" && slug.current == $slug] | order(order asc){
			_id,
			title,
			desc,
			slug,
			"additionalImages": images[].asset->originalFilename,
			"featuredImageUrl": featuredImage.asset->originalFilename,
			categories[]->{title, "slug":slug.current, parents[]->{title, "slug":slug.current}},
		}`;
	const Product = await client.fetch(query, { slug });
	return { Product };
}

// export async function load() {
// 	const query = `*[_type == "product"] | order(order asc){
// 			_id,
// 			title,
// 			desc,
// 			slug,
// 			"additionalImages": images[].asset->originalFilename,
// 			"featuredImageUrl": featuredImage.asset->originalFilename,
// 			categories[]->{title, "slug":slug.current, parents[]->{title, "slug":slug.current}},
// 		}`;
// 	const Products = await client.fetch(query);
// 	return { Products };
// }
