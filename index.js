const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // The `listen` method launches a web server.
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  
  console.log(`Server ready at: ${url}`);