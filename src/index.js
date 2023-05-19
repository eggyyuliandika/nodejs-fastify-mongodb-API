const fastify = require("fastify")({
  logger: true,
});

const productRoutes = require("../src/routes/products-routes");
const swagger = require("./utils/swagger")

require("./utils/mongoose");

fastify.register(require("@fastify/swagger"), swagger.options);

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen({ port: 3000 });
  fastify.log.info(`Server Listening on ${fastify.server.address().port}`);
};
start();
