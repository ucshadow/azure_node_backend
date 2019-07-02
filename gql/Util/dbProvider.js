class dbProvider {
  static db;
  static admin;

  static getDb() {

    if(this.admin === undefined) {
      this.admin = require('firebase-admin');
      this.admin.initializeApp({
        credential: this.admin.credential.applicationDefault(),
        databaseURL: 'https://portdb-6b860.firebaseio.com'
      });
      this.db = this.admin.firestore();
      return this.db;
    }
    return this.db;
  }
}

module.exports = dbProvider;