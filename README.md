# Dialog FullStack (react/pwa/node) Test

### Descrição da API 

#### Tecnologias Utilizadas:
- Graphql 
- Apollo Server
- Regex
- Express

Para executar o projeto:
```bash
cd server
yarn run start
```

Chamada da API via CURL:
```bash
curl 'http://localhost:4000/graphql' \
  --data-raw '{"operationName":"Person","variables":{"search":""},"query":"query Person($search: String) {\n  list(search: $search) {\n    _id\n    name\n    age\n    eyeColor\n    company\n    email\n    friends {\n      _id\n      name\n      age\n      eyeColor\n      company\n      email\n      __typename\n    }\n    __typename\n  }\n}"}' \
  --compressed
```

### Descrição React/PWA

#### Tecnologias Utilizadas:
- Apollo client
- React
- Typescript
- React Hooks
- React Router
- styled-components
- CSS Grid
- Service Worker

Para executar o projeto:
```bash
cd app
yarn run build ; yarn run preview
```
