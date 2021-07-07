# exercicio-deco-proteste
Minimal React application

## Setup
On the backend, rename ormconfig.json.template to ormconfig.json and add proper configuration.
Then, install typeorm globally and run the migrations with

    tsc && typeorm migration:run

Set the port to be used with the BACKEND_PORT environment variable, and the
NODE_ENV environment variable to "development" to enable CORS.

When done, just run

    npm start

to start the server.

On the frontend, set the REACT_APP_BACKEND_URL environment variable to
the URL and port of the backend server.

When done, just run
    
    npm start

to start the application
