const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


exports.onMessageCreate = functions.firestore
        .document('messages/{userId}')
        .onCreate((snap, context) => {
            const ref = admin.firestore().collection('messages').orderBy('timestamp');

            ref.onSnapshot(snapshot => {
                var i = 0;
                var size = snapshot.size;
                var sizeToDelete = size - 20;
                console.log('Message count: ' + size);

                snapshot.forEach((doc => {
                    if(i < sizeToDelete){
                        doc.ref.delete().then(() => {
                            console.log("Document deleted successfully");
                        }).catch((error) => {
                            console.log("Error removing document: " + error);
                        })
                    }
                    i++;
                }));
            });
        });