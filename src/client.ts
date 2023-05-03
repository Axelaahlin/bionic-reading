import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'e4xded3l',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-02',
})

export async function getSanityData(query: string) {
  const data = await client.fetch(query)
  return data
}

const builder = imageUrlBuilder(client)

export const urlBuilder = (source: any) => {
  return builder.image(source)
}

export default client
