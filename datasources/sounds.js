const { RESTDataSource } = require('apollo-datasource-rest')

class SoundAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://guitar-tuner-007.s3.eu-north-1.amazonaws.com'
  }

  async getSound({ id: id }) {
    const response = await this.get(`/${id}.m4a`)
    const url = `${this.baseURL}/${id}.m4a`
    return {
      id: id,
      url: url,
      sound: response
    }
  }
}

module.exports = SoundAPI
