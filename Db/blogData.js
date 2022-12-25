import { request, gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_ENDPOINT;

export  const getPosts =async () => {

  const query = gql`
  query Assets {
  postsConnection {
    edges {
      node {
        auhtor {
          name
          id
        }
        createdAt
        stage
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}

  `

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
}

















