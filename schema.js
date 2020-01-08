const { gql } = require('apollo-server')

const typeDefs = gql`
  type Sound {
    id: ID!
    url: String
    sound: String
  }
  type Query {
    sounds(id: ID!): Sound
  }
`

module.exports = typeDefs
