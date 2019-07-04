let Util = require('../Util/Util');

class Project {

  constructor(techs, medias, knowledges, description, story, name, webLink, gitLink, date, usefulness) {
    this.techs = techs;
    this.medias = medias;
    this.knowledges = knowledges;  // :D
    this.description = description;
    this.story = story;
    this.name = name;
    this.webLink = webLink;
    this.gitLink = gitLink;
    this.date = date;
    this.usefulness = usefulness;
    this.id = Util.UUID();
  }

  getName() {
    return this.name;
  }

}

module.exports = Project;