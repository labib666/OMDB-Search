# Express REST API

- Install `docker` and `docker-compose`
- Run `docker-compose up`


## APIs

POST /api/public/signup
- username
- email
- password
  
POST /api/public/login
- username
- password
  
GET /api/v1/user

POST /api/v1/user/logout

GET /api/v1/movies?s=abc

GET /api/v1/movies/:id

PUT /api/v1/movies/:id

DELETE /api/v1/movies/:id
