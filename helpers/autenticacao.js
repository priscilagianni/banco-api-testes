const request = require('supertest');
const postLogin = require('../fixture/postLogin.json')


const obterToken = async (usuario, senha) => {
    const bodyLogin = { ...postLogin}
    const response = await request(process.env.BASE_URL) // URL da API
            .post('/login')
            .set('Content-Type', 'application/json')
            .send(bodyLogin);

    return response.body.token

}

module.exports = {
    obterToken
}
