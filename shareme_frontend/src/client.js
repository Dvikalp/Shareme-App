import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-12-08',
    token: process.env.REACT_APP_SANITY_TOKEN 
  })

const builder=imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)  