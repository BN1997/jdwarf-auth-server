import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('')
});

const db = admin.firestore();

export { db };