let express = require('express');
let router = express.Router();

const admin = require('firebase-admin');



admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://portdb-6b860.firebaseio.com'
});

let db = admin.firestore();

router.get('/', function(req, res, next) {
    db.collection('projects').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                res.send(doc.data())
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
            res.send("Firebase did not respond..")
        });
});

module.exports = router;
