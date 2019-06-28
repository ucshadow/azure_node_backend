let express = require('express');
let router = express.Router();
const conString = process.env.ADD_STRING;

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


router.post('/add', function(req, res, next) {
    if(req.body['pwd'] && req.body['pwd'] === conString) {
        console.log(req.body);
        res.render('add_data');
    } else {
        res.send('Not allowed');
    }
});


function writeToDatabase(data) {
    admin.firestore().collection('projects').add(data).then(writeResult => {
        console.log('data added successfully.')
    });
}

module.exports = router;
