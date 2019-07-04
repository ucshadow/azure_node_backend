const{ buildSchema } = require('graphql');
const media = require('./schemas/mediaSchema');
const tech = require('./schemas/techSchema');
const knowledge = require('./schemas/knowledgeSchema');
const project = require('./schemas/projectSchema');
const Util = require('./Util/Util');


let source = ` 
  type Query {
    _dummy: String   
  }
`;


let s = Util.concatSchema(
  source,
  [media.schema, tech.schema, knowledge.schema, project.schema],
  [media.type, tech.type, knowledge.type, project.type]
);
const schema = buildSchema(s);
module.exports = schema;