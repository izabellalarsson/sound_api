const { RESTDataSource } = require('apollo-datasource-rest')

class SoundAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://guitar-tuner-007.s3.eu-north-1.amazonaws.com'
  }

  async getSound({ id: id }) {
    return {
      id: id,
      url: `${this.baseURL}/${id}.m4a`,
      sound: this.get(`/${id}.m4a`)
    }
  }
}

module.exports = SoundAPI
