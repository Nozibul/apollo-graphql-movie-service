// schema/typeDefs.js

export const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    publishedYear: Int!
    rating: Float!
    language: String!
    director: Director
  }

  type Director {
    id: ID!
    name: String!
    age: Int!
    nationality: String!
    movies: [Movie!]!
  }

  type Query {
    movies: [Movie!]!
    directors: [Director!]!
  }

  input AddMovieInput {
    title: String!
    publishedYear: Int!
    rating: Float!
    language: String!
    directorId: ID!
  }

  input AddDirectorInput {
    name: String!
    age: Int!
    nationality: String!
  }

  type Mutation {
    addMovie(input: AddMovieInput!): Movie!
    addDirector(input: AddDirectorInput!): Director!
  }
`;
