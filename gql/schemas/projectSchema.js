const root = require('../resolvers/root');
let Controller = require('../Util/dbController');

const projectSchema = `
  type Query {
    
    getAllProjects(techs: String, medias: String, knowledges: String, description: String, story: String, name: String, 
    webLink: String, gitLink: String, date: String, usefulness: String): [Project]
  } 
`;

const type_ = `
  type Project {
    techs: [Tech]
    medias: [Media]
    knowledges: [Knowledge]
    description: String
    story: String
    name: String
    webLink: String
    gitLink: String
    date: String
    usefulness: Int
  }
`;

root['getAllProjects'] = function(root, args, context, info) {
  return Controller.getAllProjects();
};

module.exports = {schema: projectSchema, type: type_};