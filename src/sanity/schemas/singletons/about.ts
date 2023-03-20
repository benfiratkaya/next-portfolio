import {UserIcon} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    icon: UserIcon,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    fields: [
        defineField({
            name: 'title',
            description: 'This field is the title of your personal website.',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            description:
                'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'About',
            }
        },
    },
})