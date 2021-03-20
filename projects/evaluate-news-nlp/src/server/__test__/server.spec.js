import 'babel-polyfill'
const request = require('supertest')
const app = require('../index')


describe('Server Test', () => {
describe('Post Endpoint', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/evaluate')
      .send({
        url:"https://www.npmjs.com/package/valid-url"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('agreement')
    expect(res.body).toHaveProperty('score_tag')
    expect(res.body).toHaveProperty('subjectivity')
    expect(res.body).toHaveProperty('confidence')
    expect(res.body).toHaveProperty('irony')

  })
})
})