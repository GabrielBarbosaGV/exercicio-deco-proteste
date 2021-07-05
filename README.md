# exercicio-deco-proteste
Minimal React application

## Setup
On the backend, rename ormconfig.json.template to ormconfig.json and add proper configuration.
Then, install typeorm globally and run the migrations with

    tsc && typeorm migration:run

Set the port to be used with the BACKEND_PORT environment variable.
When done, just run

    npm start

to start the server.