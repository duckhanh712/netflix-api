start project: yarn dev
npx knex migrate:make products -x ts
"migrate": "knex migrate:latest --knexfile d/knexfile.js"
docker-compose -f docker-compose.yml up -d
