// Temporary stub - replace when GraphQL endpoint is available
export async function getAvailableUnits() {
  // TODO: Replace with actual GraphQL query when endpoint is provided
  return {
    page: {
      id: 'temp',
      title: 'Residenza Sardagna',
      landingImmobiliare: {
        landingType: 'residential',
        availableUnits: 12, // Hardcoded for now
      },
    },
  }
}

// When GraphQL endpoint is ready, uncomment and use this:
/*
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

export async function getAvailableUnits() {
  const { data } = await client.query({
    query: gql`
      query {
        page(id: "/residenza-sardagna", idType: URI) {
          id
          title
          landingImmobiliare {
            landingType
            availableUnits
          }
        }
      }
    `,
  })
  return data
}
*/
