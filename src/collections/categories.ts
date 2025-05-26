import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Category',
        plural: 'Categories',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
                description: 'The name of the category.',
            }
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                position: 'sidebar',
                description: 'The slug is automatically generated from the name.',
            }
        }
    ]
    
}