let express = require('express');
let Project = require('../models/project');
let Provider = require('../gql/Util/dbProvider');
let router = express.Router();

const conString = process.env.ADD_STRING;



let db = Provider.getDb();

router.get('/', function (req, res, next) {
  db.collection('projects').get()
    .then((snapshot) => {
      let r = [];
      snapshot.forEach((doc) => {
        r.push(doc.data())
      });
      res.send(r);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      res.send("Firebase did not respond..")
    });
});


router.post('/add', function (req, res, next) {
  if (req.body['pwd'] && req.body['pwd'] === conString) {
    if (req.body['del'] && req.body['del'].trim().length > 0) {
      deleteFromDatabase(req.body['id_']);
      res.render('add_data', {iu: 'IU'});
      return;
    }
    writeToDatabase(req.body);
    res.render('add_data', {iu: 'IU'});
  } else {
    res.send('Not allowed');
  }
});

function writeToDatabase(data) {
  // console.log(data);
  let project = Project.createProject(data);
  console.log(JSON.stringify(project, null, 4));
  let docu = db.collection('projects').doc(project.id_);
  let parsed = JSON.parse(JSON.stringify(project));
  docu.get().then((docRef => {
    if (docRef.exists) {
      docu.update(parsed).then(writeResult => {
        console.log(writeResult);
      })
    } else {
      docu.set(parsed).then(writeResult => {
        console.log(writeResult);
      });
    }
  }));
}

function deleteFromDatabase(id_) {
  console.log('deleting ' + id_);
  db.collection("projects").doc(id_).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}

module.exports = router;
