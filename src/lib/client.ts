import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'wdj0kczy',
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: false
});

export default client;
