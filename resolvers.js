module.exports = {
  Query: {
    sounds: (_, { id }, { dataSources }) =>
      dataSources.soundAPI.getSound({ id: id })
  }
}
