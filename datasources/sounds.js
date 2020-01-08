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

  async getAllTones() {
    const tones = [
      { tone: 'E3', url: `${this.baseURL}/E3.m4a` },
      { tone: 'B2', url: `${this.baseURL}/B2.m4a` },
      { tone: 'G2', url: `${this.baseURL}/G2.m4a` },
      { tone: 'D2', url: `${this.baseURL}/D2.m4a` },
      { tone: 'A1', url: `${this.baseURL}/A1.m4a` },
      { tone: 'E1', url: `${this.baseURL}/E1.m4a` }
    ]

    return tones
  }
}

module.exports = SoundAPI
