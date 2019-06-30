# Express REST API
- Make a `.env.staging` file in `environments` directory. Edit the secrets accordingly.
- Install `docker` and `docker-compose`
- Run `docker-compose up` or `yarn docker`


## APIs

POST /api/public/signup
- username
- email
- password
  
POST /api/public/login
- username
- password
  
GET /api/v1/user

GET /api/v1/user/movies

POST /api/v1/user/logout

GET /api/v1/movies?s=abc

GET /api/v1/movies/:id

PUT /api/v1/movies/:id
- name
- image

DELETE /api/v1/movies/:id
