module.exports = {
  Query: {
    sounds: (_, { id }, { dataSources }) =>
      dataSources.soundAPI.getSound({ id: id }),
    getAllSounds: (_, __, { dataSources }) => dataSources.soundAPI.getAllTones()
  }
}
