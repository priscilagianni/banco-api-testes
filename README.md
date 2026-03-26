#  Banco API - Testes Automatizados

## 📌 Sobre o Projeto

Este projeto tem como objetivo a **automação de testes de API REST** para a aplicação [Banco API](https://github.com/priscilagianni/banco-api).

Os testes foram desenvolvidos para validar funcionalidades como autenticação, transferências e regras de negócio da API, contribuindo a qualidade e confiabilidade do sistema.

---

## 🎯 Objetivo

- Validar os endpoints da API de forma automatizada
- Garantir regras de negócio (ex: valor mínimo de transferência)
- Detectar falhas de forma rápida e eficiente
- Servir como base de estudo e prática em automação de testes de API

---

## 🚀 Stack Utilizada

- **JavaScript**
- **Node.js**
- **Mocha** – Framework de testes
- **Chai** – Biblioteca de asserções
- **Supertest** – Requisições HTTP para testes de API
- **dotenv** – Gerenciamento de variáveis de ambiente
- **Mochawesome** – Geração de relatórios em HTML

---

## 📂 Estrutura do Projeto

```
banco-api-testes/
│
├── test/
│   ├── login.test.js
│   ├── transferencias.test.js
│
├── helpers/
│   └── autenticacao.js
│
├── fixture/
│   └── postTransferencias.json
│
├── mochawesome-report/
│   └── (relatórios gerados automaticamente)
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/priscilagianni/banco-api-testes.git
cd banco-api-testes
```

---

### 🔹 2. Instalar dependências

```bash
npm install
```

---

### 🔹 3. Criar arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ Certifique-se de que a API esteja rodando localmente.

---

## ▶️ Execução dos Testes

Para rodar os testes:

```bash
npm test
```

---

## 📊 Relatórios

Após a execução dos testes, será gerado automaticamente um relatório em HTML pelo **Mochawesome** no diretório:

```
mochawesome-report/
```

Para visualizar:

👉 Abra o arquivo `mochawesome.html` no navegador

---

## 🔗 Documentação das Dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- dotenv: https://github.com/motdotla/dotenv
- Mochawesome: https://github.com/adamgruber/mochawesome

---

## 📌 Observações

- É necessário que a API [Banco API](https://github.com/priscilagianni/banco-api) esteja em execução para que os testes funcionem corretamente.
- Os dados de teste utilizam fixtures para padronização e reutilização.
- O token de autenticação é obtido dinamicamente durante a execução dos testes.

---

## 👩‍💻 Autora

**Priscila Gianni**  
🔗 https://github.com/priscilagianni

---
