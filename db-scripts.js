let Firestore = require("@google-cloud/firestore");

const db = new Firestore({ keyFilename: "./key.json" });

// env();
// if (firebase.apps.length === 0)
//   firebase.initializeApp({
//     apiKey: process.env.apiKey,
//     authDomain: `${process.env.project_id}.firebaseapp.com`,
//     databaseURL: `https://${process.env.project_id}.firebaseio.com`,
//     projectId: process.env.project_id,
//   });
// else firebase.app();

let members = require("./cms-api/data/members-sp19.json");
let collectionRef = db.collection("team-members");
members.forEach(member => {
    collectionRef.doc().set(member);
});