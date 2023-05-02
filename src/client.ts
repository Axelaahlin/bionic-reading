import { createClient } from '@sanity/client'

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

export default client
