const API_TOKEN = process.env.HASHNODE_API_TOKEN
const API_HOST = process.env.HASH_NODE_API_HOST

export async function get<T, K>({query, variables }:{ query: T, variables: K }) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables
    }),
  }
  const response = await fetch(API_HOST, requestOptions)

  const { data } = await response.json()

  return data
}
