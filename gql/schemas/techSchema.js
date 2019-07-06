const root = require('../resolvers/root');
let Controller = require('../Util/dbController');

const techSchema = `
  type Query {
    getAllTechs(name: String, description: String, type: String, url: String, picUrl: String, id: String): [Tech]   
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

root['getAllTechs'] = function({}) {
  return Controller.getTechs()
};

module.exports = {schema: techSchema, type: type_};
