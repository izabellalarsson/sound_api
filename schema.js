const { gql } = require('apollo-server')

const typeDefs = gql`
  type Sound {
    id: ID!
    tone: String
    url: String
    sound: String
  }

  type Query {
    sounds(id: ID!): Sound
    getAllSounds: [Sound]
  }
`
module.exports = typeDefs
