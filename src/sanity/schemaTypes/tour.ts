export const tour = {
    name: 'tour',
    title: 'Tour',
    type: 'document',
    fields: [
        { name: 'id', type: 'string', title: 'Tour ID' },
        { name: 'title', type: 'string', title: 'Tour Title' },
        { name: 'location', type: 'string', title: 'Location' },
        { name: 'duration', type: 'string', title: 'Duration (e.g., 3 Days / 2 Nights)' },
        { name: 'durationDays', type: 'number', title: 'Duration in Days' },
        { name: 'price', type: 'number', title: 'Price' },
        { name: 'rating', type: 'number', title: 'Rating' },
        {
            name: 'region',
            type: 'string',
            title: 'Region',
            options: {
                list: [
                    { title: 'North Island', value: 'North Island' },
                    { title: 'South Island', value: 'South Island' },
                    { title: 'Both', value: 'Both' },
                    { title: 'International', value: 'International' },
                ]
            }
        },
        { name: 'image', type: 'image', title: 'Main Image', options: { hotspot: true } },
        { name: 'featured', type: 'boolean', title: 'Featured Tour', initialValue: false },
        { name: 'description', type: 'text', title: 'Description' },
    ]
}

