let Util = require('../Util/Util');

class Tech {

  constructor(name, description, type, url, picUrl, id) {
    this.name = name;
    this.description = description;
    this.type_ = type;
    this.url = url;
    this.picUrl = picUrl;
    this.id = id ? id : Util.UUID();
  }
}

module.exports = Tech;