// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  logger: true
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { welcomeSentence: "Hello World from Fastify!" };
});

// Run the server!!
try {
  await fastify.listen({ port: process.env.PORT, host: process.env.HOSTNAME });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
