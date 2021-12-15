export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'featuredImage',
			title: 'Featured Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					title: 'Alternative text',
					name: 'alt',
					type: 'string',
					options: {
						isHighlighted: true // <-- make this field easily accessible
					}
				}
			]
		},
		{
			name: 'desc',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'images',
			title: 'Additional Images',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{ title: 'Title', name: 'title', type: 'string' },
						{
							title: 'Alternative text',
							name: 'alt',
							type: 'string'
						}
					]
				}
			]
		},
		// {
		// 	title: 'Default variant',
		// 	name: 'defaultProductVariant',
		// 	type: 'productVariant'
		// },
		// {
		// 	title: 'Variants',
		// 	name: 'variants',
		// 	type: 'array',
		// 	of: [
		// 		{
		// 			title: 'Variant',
		// 			type: 'productVariant'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Tags',
		// 	name: 'tags',
		// 	type: 'array',
		// 	of: [
		// 		{
		// 			type: 'string'
		// 		}
		// 	],
		// 	options: {
		// 		layout: 'tags'
		// 	}
		// },
		// {
		// 	name: 'blurb',
		// 	title: 'Blurb',
		// 	type: 'localeString'
		// },
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' }
				}
			]
		}
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'categories.0.title',
			media: 'featuredImage'
		}
	}
};
