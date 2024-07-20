import jsonServer from 'json-server';

// Create the server
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();

// Use middlewares and router
server.use(middlewares);
server.use(router);

// Export the server
export default server;
