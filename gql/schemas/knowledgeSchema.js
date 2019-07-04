const root = require('../resolvers/root');
let Knowledge = require('../gql_models/knowledge');
let Tech = require('../gql_models/tech');

const knowledgeSchema = `
  type Query {
    getKnowledge(tech: String, knowledgeGained: Int): Knowledge    
  } 
`;

const type_ = `
  type Knowledge {
    tech: Tech, 
    knowledgeGained: Int
  }
`;

root['getKnowledge'] = function({}) {
  return new Knowledge(new Tech('Minah tech', 'A grill', 'grill type', 'grill url', 'some imgur link for Minah'), 1);
};

module.exports = {schema: knowledgeSchema, type: type_};