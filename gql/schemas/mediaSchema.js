const root = require('../resolvers/root');
let Media = require('../gql_models/media');

const mediaSchema = `
  type Query {
    getMedia(name: String, type: String, url: String, title: String): Media    
  } 
`;

const type_ = `
  type Media {
    name: String!
    type: String!
    url: String!
    title: String!
  }
`;

root['getMedia'] = function({}) {
  return new Media('Minah', 'A grill', 'grill url', 'some title');
};

module.exports = {schema: mediaSchema, type: type_};