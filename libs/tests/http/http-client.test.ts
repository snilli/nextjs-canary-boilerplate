import { HttpClient } from '../../src/http'

describe('test http request', () => {
    test('GET Method', async () => {
        const client = new HttpClient()

        const res = await client.request({
            url: 'https://google.com',
            method: 'GET',
            path: '/',
        })

        expect(res.body).toBeDefined()
    })
})
