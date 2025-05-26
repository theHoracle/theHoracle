import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Media } from './collections/media'
import { Categories } from './collections/categories'
import { Projects } from './collections/projects'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

export default buildConfig({
  editor: lexicalEditor(),
 
  collections: [
    Projects,
    Categories,
    Media,
  ],

  secret: process.env.PAYLOAD_SECRET || '',
  
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    uploadthingStorage({
        collections: {
            media: true,
        },
        options: {
            token: process.env.UPLOADTHING_TOKEN || '',
            acl: 'public-read',
        }
    })
  ],
  typescript: {
    outputFile: "./payload-types.ts"
  },

  sharp,
})