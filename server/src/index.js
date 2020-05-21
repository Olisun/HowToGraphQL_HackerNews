const { GraphQLServer } = require('graphql-yoga');

let links = [
  {
    id: 'link-1',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: 'link-2',
    url: 'www.espn.com',
    description: 'Sports website'
  },
  {
    id: 'link-3',
    url: 'www.dev.to',
    description: 'Developers blog'
  }
]

let linksIdCount = links.length

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
  },

  Mutation: {
    post: (parent, args) => {
      const newLink = {
        id: `link-${linksIdCount++}`,
        description: args.description,
        url: args.url
      }
      links = [...links, newLink]
      return newLink
    },
    delete: (args, { id }) => {
      const linkToDelete = links.find(args => args.id === id);
      links = links.filter(link => {
        return link.id !== linkToDelete.id;
      });
      return linkToDelete;
    },
    update: (args, { id, url, description }) => {
      let updatedLink;
      links = links.map(link => {
        if (link.id === id) {
          updatedLink = {
            id: link.id,
            url: url !== undefined ? url : link.url,
            description: description !== undefined ? description : link.description
          }
          return updatedLink;
        } else {
          return link
        }
      });
      return updatedLink
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on localhost:4000`));