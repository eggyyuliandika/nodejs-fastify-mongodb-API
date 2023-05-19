exports.options = {
  routePrefix: "/documentation",
  expouseRoute: true,
  swagger: {
    info: {
      title: "Node.js fastify Mongodb API",
      description: "My first test fastify swagger",
      version: "0.0.1",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "find more info here",
    },
  },
  host: "localhost:3000",
  schemas: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
