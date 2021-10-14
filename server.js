const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = require("./types");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => res.send("Hello express."));

  app.listen({ port: 4000 }, () =>
    console.log(
      "Now browse to http://localhost:4000" + apolloServer.graphqlPath
    )
  );
}

startServer();
