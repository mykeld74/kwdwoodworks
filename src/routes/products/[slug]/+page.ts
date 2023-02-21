import client from '$lib/client';
export const prerender = true;

//get page params
export async function load({ params }) {
	const { slug } = params;
	const query = `*[_type == "product" && slug.current == $slug] | order(order asc){
		_id,
		desc,
		fullDesc,
		isSold,
		itemDepth,
		itemHeight,
		itemWidth,
		price,
		slug,
		title,
		"additionalImages": additionalImages[]{public_id},
		"featuredImageUrl": featuredImage.public_id,
		categories[]->{title, "slug":slug.current, parents[]->{title, "slug":slug.current}},
		}`;
	const Product = await client.fetch(query, { slug });
	return { Product };
}
