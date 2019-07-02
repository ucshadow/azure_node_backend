fetch('/api')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    displayEntries(myJson)
  });

function displayEntries(json) {
  json.forEach(e => {
    let button = document.createElement('button');
    button.classList.add('btn-primary');
    button.innerText = e['name'];
    button.addEventListener('click', () => {clicked(e)});
    document.getElementById('dbData').appendChild(button)
  })
}

function clicked(e) {
  parseMedia(e);
  // parseCodeSamples(e);
  // parseLanguages(e);
  parseTechs(e);

  document.getElementById('rDescription')['value'] = e['description'];
  document.getElementById('rStory')['value'] = e['story'];
  document.getElementById('rName')['value'] = e['name'];
  document.getElementById('rWebLink')['value'] = e['web_link'];
  document.getElementById('rDate')['value'] = e['date'];
  document.getElementById('rGitLink')['value'] = e['git_link'];
  document.getElementById('rUsefulness')['value'] = e['usefulness'];
  document.getElementById('rKnowledges')['value'] = e['knowledges']
    .map(e => {return e['knowledgeGained']}).join('|');
  document.getElementById('rId')['value'] = e['id'];

}

function parseMedia(json) {
  if(json['medias'] === undefined || json['medias'].length === 0) return;
  let titles = [];
  let names = [];
  let types_ = [];
  let urls = [];
  json['medias'].forEach(e => {
    titles.push(e['title']);
    names.push(e['name']);
    types_.push(e['type']);
    urls.push(e['url']);
  });

  document.getElementById('mTitle')['value'] = titles.join('|');
  document.getElementById('mName')['value'] = names.join('|');
  document.getElementById('mType')['value'] = types_.join('|');
  document.getElementById('mUrl')['value'] = urls.join('|');
}

function parseCodeSamples(json) {
  if(json['code_samples'] === undefined || json['code_samples'].length === 0) return;

  let descriptions = [];
  let texts = [];
  let comments = [];
  let knows = [];
  let titles = [];
  let languages = [];

  json['code_samples'].forEach(e => {
    descriptions.push(e['description']);
    texts.push(e['text']);
    comments.push(e['comment']);
    knows.push(e['knowledge_gained']);
    titles.push(e['title']);
    languages.push(e['language']);
  });

  document.getElementById('cDescription')['value'] = descriptions.join('|');
  document.getElementById('cText')['value'] = texts.join('|');
  document.getElementById('cComment')['value'] = comments.join('|');
  document.getElementById('cKnowledge')['value'] = knows.join('|');
  document.getElementById('cTitle')['value'] = titles.join('|');
  document.getElementById('cLanguage')['value'] = languages.join('|');
}

function parseLanguages(json) {
  if(json['languages'] === undefined || json['languages'].length === 0) return;

  let names = [];
  let comments = [];
  let knows = [];
  let urls = [];
  let titles = [];

  json['languages'].forEach(e => {
    names.push(e['name']);
    comments.push(e['comment']);
    knows.push(e['knowledge_gained']);
    urls.push(e['url']);
    titles.push(e['title']);
  });

  document.getElementById('lTitle')['value'] = titles.join('|');
  document.getElementById('lName')['value'] = names.join('|');
  document.getElementById('lComment')['value'] = comments.join('|');
  document.getElementById('lKnowledge')['value'] = knows.join('|');
  document.getElementById('lUrl')['value'] = urls.join('|');
}

function parseTechs(json) {
  if(json['techs'] === undefined || json['techs'].length === 0) return;

  let names = [];
  // let comments = [];
  // let types_ = [];
  // let titles = [];
  // let knows = [];
  // let urls = [];

  json['techs'].forEach(e => {
    names.push(e['name']);
    // comments.push(e['comment']);
    // types_.push(e['type']);
    // titles.push(e['title']);
    // knows.push(e['knowledge_gained']);
    // urls.push(e['url']);
  });

  document.getElementById('tName')['value'] = names.join('|');
  // document.getElementById('tUrl')['value'] = urls.join('|');
  // document.getElementById('tComment')['value'] = comments.join('|');
  // document.getElementById('tKnowledge')['value'] = knows.join('|');
  // document.getElementById('tTitle')['value'] = titles.join('|');
  // document.getElementById('tType')['value'] = types_.join('|');
}