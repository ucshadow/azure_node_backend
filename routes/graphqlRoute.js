const graphqlHTTP = require('express-graphql');
const schema = require('../gql/schema');
const root = require('../gql/resolvers/root');

const router = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = router;