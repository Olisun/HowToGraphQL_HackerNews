const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');

const resolvers = {
  Query,
  Mutation,
  User,
  Link
},

  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
      url: args.url,
      description: args.description
    })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log(`Server is running on localhost:4000`));