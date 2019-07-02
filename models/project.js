let Util = require('../gql/Util/Util');
let Controller = require('../gql/Util/dbController');

class Project {

  constructor() {
    this.name = '';
    this.web_link = '';
    this.description = '';
    this.story = '';
    this.git_link = '';
    this.date = '';
    this.id_ = '';
    // this.languages = [];
    this.media = [];
    this.techs = [];
    this.usefulness = 0;
    this.knowledges = [];
    // this.code_samples = [];
  }

  static createProject = (d) => {
    let res = new Project();
    res.name = d['name'];
    res.web_link = d['web_link'];
    res.description = d['description'];
    res.story = d['story'];
    res.git_link = d['git_link'];
    res.date = d['date'];
    res.id_ = Util.UUID().substring(0, 6);
    res.usefulness = d['usefulness'];

    this.parseKnowledges(d, res);
    // this.parseLanguages(d, res);
    this.parseMedia(d, res);
    this.parseTechs(d, res);
    // this.parseCodeSamples(d, res);
    return res;
  };

  static parseMedia = (d, p) => {
    let numberOFEntries = d['media_title'].split('|').length;

    let titles = d['media_title'].split('|');
    let names = d['media_name'].split('|');
    let types_ = d['media_type'].split('|');
    let urls = d['media_url'].split('|');

    for(let i = 0; i < numberOFEntries; i++) {
      let obj = {};
      obj['name'] = names[i];
      obj['type'] = types_[i];
      obj['url'] = urls[i];
      obj['title'] = titles[i];
      p.media.push(obj)
    }
  };

  static parseKnowledges = (d, p) => {
    let numberOFEntries = d['tech_name'].split('|').length;

    let titles = d['tech_name'].split('|');
    let knows = d['knowledges'].split('|');

    for(let i = 0; i < numberOFEntries; i++) {
      let obj = {};
      obj['tech'] = titles[i];
      obj['knowledgeGained'] = knows[i];
      p.knowledges.push(obj)
    }
  };

  static parseLanguages = (d, p) => {
    let numberOFEntries = d['language_title'].split('|').length;

    let titles = d['language_title'].split('|');
    let names = d['language_name'].split('|');
    let comments = d['language_comment'].split('|');
    let knows = d['language_knowledge'].split('|');
    let urls = d['language_url'].split('|');

    for(let i = 0; i < numberOFEntries; i++) {
      let obj = {};
      obj['title'] = titles[i];
      obj['name'] = names[i];
      obj['comment'] = comments[i];
      obj['knowledge_gained'] = knows[i];
      obj['url'] = urls[i];
      p.languages.push(obj)
    }
  };

  static parseTechs = (d, p) => {

    let numberOFEntries = d['tech_name'].split('|').length;

    let tech_names = d['tech_name'].split('|');

    let res = {};

    Controller.getTechs().then(snap => {
      res[snap['name']] = snap['id'];
      for(let i = 0; i < numberOFEntries; i++) {
        p.techs.push(res[tech_names[i]])
      }
    })

  };

  // static parseCodeSamples = (d, p) => {
  //   let numberOFEntries = d['code_title'].split('|').length;
  //
  //   let descriptions = d['code_description'].split('|');
  //   let texts = d['code_text'].split('|');
  //   let comments = d['code_comment'].split('|');
  //   let knows = d['code_knowledge'].split('|');
  //   let titles = d['code_title'].split('|');
  //   let languages = d['code_language'].split('|');
  //
  //   for(let i = 0; i < numberOFEntries; i++) {
  //     let obj = {};
  //     obj['title'] = titles[i];
  //     obj['description'] = descriptions[i];
  //     obj['comment'] = comments[i];
  //     obj['knowledge_gained'] = knows[i];
  //     obj['text'] = texts[i];
  //     obj['language'] = languages[i];
  //     p.code_samples.push(obj)
  //   }
  // }
}

module.exports = Project;