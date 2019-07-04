const root = require('../resolvers/root');
let Tech = require('../gql_models/tech');

const techSchema = `
  type Query {
    getTech(name: String, description: String, type: String, url: String, picUrl: String, id: String): Tech    
  } 
`;

const type_ = `
  type Tech {
    name: String, 
    description: String, 
    type_: String, 
    url: String, 
    picUrl: String, 
    id: String
  }
`;

root['getTech'] = function({}) {
  return new Tech('Minah tech', 'A grill', 'grill type', 'grill url', 'some imgur link for Minah');
};

module.exports = {schema: techSchema, type: type_};