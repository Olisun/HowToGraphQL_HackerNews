const { GraphQLServer } = require('graphql-yoga');

let links = [
  {
    id: '1',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: '2',
    url: 'www.espn.com',
    description: 'Sports website'
  },
  {
    id: '3',
    url: 'www.dev.to',
    description: 'Developers blog'
  }
]

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
    link(id: ID!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    info: () => {
      return `Testing the API.`
    },
    feed: () => {
      return links
    },
    link: (args, { id }) => {
      const link = links.find(args => args.id === id);
      return link
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is running on localhost:4000`));