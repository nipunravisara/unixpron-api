import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Rice {
    id: ID
    title: String
    windowManager: String
    image: String
    upvotes: Int
    riceUrl: String
    author: String
    authorUrl: String
    createdAt: String
  }

  type Query {
    rices: [Rice]
  }
`;

export default typeDefs;
