import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers/index.js";
import typeDefs from "./types/index.js";

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      "Now browse to http://localhost:4000" + apolloServer.graphqlPath
    )
  );
}

startServer();
