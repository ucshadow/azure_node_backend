let Provider = require('./dbProvider');

class Controller {

  static addData(data, dbName){
    data = JSON.parse(JSON.stringify(data));
    let doc = this.db.collection(dbName).doc(data['id']);
    if(this.alreadyPresent(doc)) {
      doc.update(data).then(wr => {
        console.log('Successfully updated ' + wr['id']);
      })
    } else {
      doc.set(data).then(wr => {
        console.log('Successfully added' + wr['id']);
      })
    }
  };

  // code samples is off for now
  static addProject(project){
    // project.techs.forEach(e => {
    //   this.addData(e, 'techs')
    // });

    let theRest = {
      id: project.id,
      description: project.description,
      story: project.story,
      name: project.name,
      webLink: project.webLink,
      gitLink: project.gitLink,
      date: project.date,
      medias: project.medias,
      knowledges: project.knowledges,
      techs: project.techs
    };

    this.addData(theRest, 'projects')
  };

  static getTechs(){
    return this.db.collection('techs').get()
  };

  static alreadyPresent(doc) {
    doc.get().then(docRef => {
      if(docRef.exists) {
        return true
      }
    });
    return false;
  }

  static getAllProjects() {
    return Provider.projects
  }
}

Controller.db = Provider.getDb();

module.exports = Controller;