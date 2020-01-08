const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers.js')

const SoundAPI = require('./sounds')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      soundAPI: new SoundAPI()
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
