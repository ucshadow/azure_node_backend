import Util from '../Util/Util'

class CodeSamples {

  constructor(tech, description, sample, comment, url) {
    this.tech = tech;
    this.description = description;
    this.sample = sample;
    this.comment = comment;
    this.url = url;
    this.id = Util.UUID();
  }

}

module.exports = CodeSamples;