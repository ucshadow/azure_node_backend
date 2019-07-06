let Project = require('../gql_models/project');
let Tech = require('../gql_models/tech');
let Knowledge = require('../gql_models/knowledge');
let Media = require('../gql_models/media');

class DbProvider {

  static getDb() {

    if (DbProvider.admin === undefined) {
      DbProvider.admin = require('firebase-admin');
      DbProvider.admin.initializeApp({
        credential: DbProvider.admin.credential.applicationDefault(),
        databaseURL: 'https://portdb-6b860.firebaseio.com'
      });
      DbProvider.db = DbProvider.admin.firestore();
      return DbProvider.db;
    }
    return DbProvider.db;
  }

  static _getAllTechs() {
    DbProvider.db.collection('techs').get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          let e = doc.data();
          let t = new Tech(e['name'], e['description'], e['type_'],
            e['url'], e['picUrl'], e['id'],);

          DbProvider.techs.push(t)
        });
        DbProvider._getAllProjects();
      })
  }

  static _getAllProjects() {
    DbProvider.db.collection('projects').get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          let e = doc.data();

          let medias = e['medias'].map(x => {
            return new Media(x['name'], x['type'], x['url'], x['title']);
          });
          let knowledges = e['knowledges'].map(x => {
            return new Knowledge(x['tech'], x['knowledgeGained']);
          });
          let techs = e['techs'].map(x => {
            return this.techs.filter(t => {
              return t['id'] === x
            })[0]
          });

          let project = new Project(techs, medias, knowledges, e['description'],
            e['story'], e['name'], e['webLink'], e['gitLink'], e['date'], e['usefulness']);
          DbProvider.projects.push(project);
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }
}

DbProvider.projects = [];
DbProvider.techs = [];
DbProvider.db = undefined;
DbProvider.admin = undefined;
DbProvider.getDb();
DbProvider._getAllTechs();

module.exports = DbProvider;
