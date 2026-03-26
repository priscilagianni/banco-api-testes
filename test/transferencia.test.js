const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao.js')
const postTreanferencias = require('../fixture/postTransferencias.json')

describe('transferências', () => {
    describe('POST /transferencias', () => {
          let token  
          
        beforeEach( async () => {
                 token = await obterToken('julio.lima', '123456')
            })
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {   
           
            const bodyTransferencias = { ... postTreanferencias}
            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send( postTreanferencias)

            expect(response.status).to.equal(201);

        })

         it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00', async () => {
            
            const bodyTransferencias = { ... postTreanferencias}
            bodyTransferencias.valor = 7
            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('content-type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino : 2,
                valor: 7,
                token: ""
            })

            expect(response.status).to.equal(422);
        })
    })
})