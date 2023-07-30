<h1 align="center" font-family="pattaya">Desafio Fullstack</h1><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
Esta API consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">bcryptjs: "^2.4.3",</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.0.3"</li>
<li font-family="robotto" font-size="16px">express: "^4.18.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">jsonwebtoken: "^9.0.0"</li>
<li font-family="robotto" font-size="16px">pdfkit: "^0.13.0"</li>
<li font-family="robotto" font-size="16px">pg: "^8.11.0"</li>
<li font-family="robotto" font-size="16px">pg-format: "^1.0.4"</li>
<li font-family="robotto" font-size="16px">reflect-metadata: "^0.1.13">
<li font-family="robotto" font-size="16px">typeorm: "0.3.15"</li>
<li font-family="robotto" font-size="16px">zod: "^3.21.4"</li>
</ul><br>

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://yarnpkg.com/package/zod)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama de Entidade de Relacionamentos (DER)

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama DER da API definindo tabelas utilizadas e seus relacionamentos no banco de dados.

![DER](User_Clients_DER.jpg)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
npm intall
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
npm run typeorm migration:run -- -d ./src/data-source
```

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Na aplicação foi usada a biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para criação de token e autenticação do Usuário.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

## **Usuário**

A tabela Usuário é definida como:

| Campo     | Tipo      | Descrição                                               |
| --------- | --------- | ------------------------------------------------------- |
| id        | number    | Identificador único do Usuário                          |
| name      | string    | O nome do Usuário.                                      |
| email     | string    | O e-mail do Usuário.                                    |
| password  | string    | A senha de acesso do Usuário                            |
| phone     | string    | O telefone do Usuário                                   |
| createdat | timestamp | O registro do cadastro do Usuário, contendo data e hora |

### Endpoints

| Método | Rota      | Descrição                                         |
| ------ | --------- | ------------------------------------------------- |
| POST   | /user     | Criação de um Usuário.                            |
| GET    | /user     | Lista todos os Usuários.                          |
| GET    | /user/:id | Lista um Usuário, usando seu ID como parâmetro    |
| PATCH  | /user/:id | Atualiza um Usuário, usando seu ID como parâmetro |
| DELETE | /user/:id | Deleta um Usuário, usando seu ID como parâmetro   |

---

### 1.1. **Criar Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/user`

### Exemplo de Request:

```
POST /user
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Nagilo",
  "email": "nagilo@mail.com",
  "password": "1234",
  "phone": "7199229-5894"
}
```

### Resposta da Requisição:

```json
{
	"name": "Nagilo",
  	"email": "nagilo@mail.com",
  	"password": "1234",
  	"phone": "7199229-5894",
	"id": 1,
	"createdat": "2023-05-25T20:18:18.418Z"
}

OBS: Não há retorno da senha na resposta da requisição.
```

### 1.2. **Listar todos Usuários**

```
GET /user
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "name": "user1",
    "email": "user1@mail.com",
    "phone": "2198996-2345",
    "id": 1,
    "createdat": "2023-05-25T15:48:28.349Z"
  },
  {
    "name": "user2",
    "email": "user2@mail.com",
    "phone": "21989524732",
    "id": 6,
    "createdat": "2023-05-27T13:07:56.267Z"
  },
  {
    "name": "user3",
    "email": "user3@mail.com",
    "phone": "21989524732",
    "id": 7,
    "createdat": "2023-05-27T14:49:18.597Z"
  }
]
```

### 1.3. **Listar Usuário por id**

### Exemplo de Request:

```
GET /user/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do Usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
	"user": {
		"name": "Nagilo",
		"email": "nagilo@mail.com",
		"phone": "21989524732",
		"id": 6,
		"createdat": "2023-05-27T13:07:56.267Z"
	},
	"contacts": [
		{
			"id": 5,
			"name": "user1",
			"email": "user1@mail.com",
			"phone": "21982150583",
			"createdat": "2023-05-29T01:15:59.044Z",
		},
		{
			"id": 4,
			"name": "user2",
			"email": "user2@mail.com",
			"phone": "21989964562",
			"createdat": "2023-05-28T23:19:37.833Z",
		},
		{
			"id": 8,
			"name": "user3",
			"email": "user3@mail.com",
			"phone": "21989524733",
			"createdat": "2023-05-29T19:16:41.081Z",
		}
	]
}

OBS: Nesta rota há o array de contacts na resposta da requisição.
```

### 1.4. **Atualizar Usuário por id**

### Exemplo de Request:

```
PATCH /user/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do Usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "nagilo123@mail.com"
}
```

### Resposta da Requisição:

```json
{
  "name": "Nagilo",
  "email": "nagilo123@mail.com",
  "phone": "2198215-2935",
  "id": 3,
  "createdat": "2023-05-25T20:18:18.418Z"
}
```

### 1.5. **Deletar Usuário por id**

### Exemplo de Request:

```
DELETE /user/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do Usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body
```

### Resposta da Requisição:

```
Retorna apenas o status 204.
```

### 2.1. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "admin@mail.com",
  "password": "1234"
}
```

### Resposta da Requisição:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhhbmRyYUBtYWlsLmNvbSIsImlhdCI6MTY4NTQ3NjAwMywiZXhwIjoxNjg1NTYyNDAzLCJzdWIiOiI2In0.xa0amJ3kE3-Pjl8ifzwKhAxaQUN2Ngu1l2boKkD4iLM"
}
```

## **contacts**

A tabela contacts é definida como:

| Campo     | Tipo      | Descrição                                               |
| --------- | --------- | ------------------------------------------------------- |
| id        | number    | Identificador único do contato                          |
| name      | string    | O nome do contato.                                      |
| email     | string    | O e-mail do contato.                                    |
| phone     | string    | O telefone do contato                                   |
| createdat | timestamp | O registro do cadastro do contato, contendo data e hora |

### Endpoints

| Método | Rota          | Descrição                                         |
| ------ | ------------- | ------------------------------------------------- |
| POST   | /contacts     | Criação de um contato.                            |
| GET    | /contacts     | Lista todos os contatos.                          |
| GET    | /contacts/:id | Lista um contato, usando seu ID como parâmetro    |
| PATCH  | /contacts/:id | Atualiza um contato, usando seu ID como parâmetro |
| DELETE | /contacts/:id | Deleta um contato, usando seu ID como parâmetro   |

---

### 3.1. **Criar Contato**

[ Voltar para os Endpoints ](#5-endpoints)

### `/contacts`

### Exemplo de Request:

```
POST /contacts
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Luciano Almeida",
  "phone": "21985164220",
  "email": "luciano@mail.com"
}
```

### Resposta da Requisição:

```json
{
  "name": "Luciano Almeida",
  "email": "luciano@mail.com",
  "phone": "21985164220",
  "id": 7,
  "createdat": "2023-05-29T01:19:05.659Z"
}
```

### 1.2. **Listar todos Contatos**

```
GET /contacts
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "name": "Felipe Santos",
    "email": null,
    "phone": "21989964562",
    "id": 1,
    "createdat": "2023-05-25T15:49:11.754Z"
  },
  {
    "name": "Paulo Santos",
    "email": "paulo@mail.com",
    "phone": "21989964562",
    "id": 3,
    "createdat": "2023-05-25T19:56:16.157Z"
  }
]
```

### 3.3. **Listar Contato por id**

### Exemplo de Request:

```
GET /contacts/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
	"name": "Junior",
	"email": "junior@mail.com",
	"phone": "21982150583",
	"id": 5,
	"createdat": "2023-05-29T01:15:59.044Z",
	"user": {
		"name": "nagilo",
		"email": "nagilo@mail.com",
		"phone": "21989524732",
		"id": 6,
		"createdat": "2023-05-27T13:07:56.267Z"
	}
}

OBS: Nesta rota há o objeto user na resposta da requisição.
```

### 3.4. **Atualizar Contato por id**

### Exemplo de Request:

```
PATCH /contacts/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "paulo@mail.com"
}
```

### Resposta da Requisição:

```json
{
  "name": "Paulo Santos",
  "email": "paulo@mail.com",
  "phone": "21989964562",
  "id": 3,
  "createdat": "2023-05-25T19:56:16.157Z"
}
```

### 3.5. **Deletar Contato por id**

### Exemplo de Request:

```
DELETE /contacts/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body
```

### Resposta da Requisição:

```
Retorna apenas o status 204.
```

### Exemplo de possíveis erros de request.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | number | Identificador único do usuário (user) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "user": {
    "name": "alexandra miranda",
    "email": "alexandra@mail.com",
    "id": 6,
    "createdat": "2023-05-27T13:07:56.267Z"
  },
  "contacts": [
    {
      "id": 5,
      "name": "Junior",
      "email": "junior@mail.com",
      "phone": "21982150583",
      "createdat": "2023-05-29T01:15:59.044Z"
    },
    {
      "id": 4,
      "name": "Paulo Santos",
      "email": "paulo@mail.com",
      "phone": "21989964562",
      "createdat": "2023-05-28T23:19:37.833Z"
    },
    {
      "id": 8,
      "name": "Juliana Airana",
      "email": "julis@mail.com",
      "phone": "21989524733",
      "createdat": "2023-05-29T19:16:41.081Z"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro | Descrição                    |
| -------------- | ---------------------------- |
| 404 Not Found  | "message": "User not found!" |

### 4.1. **Listando Relatório de Contatos**

[ Voltar aos Endpoints ](#5-endpoints)

### Possíveis Erros:

| 401 Unauthorized | You don`t have permissions or invalid token. |
