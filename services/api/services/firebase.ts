import admin from "firebase-admin"
import config from "../config"

export const serviceAccount: any = {
  project_id: config.FIREBASE_PROJECT_ID,
  private_key_id: config.FIREBASE_PRIVATE_KEY_ID,
  private_key: config.FIREBASE_PRIVATE_KEY,
  client_email: config.FIREBASE_CLIENT_EMAIL,
  client_id: config.FIREBASE_CLIENT_ID,
  auth_uri: config.FIREBASE_AUTH_URI,
  token_uri: config.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: config.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: config.FIREBASE_CLIENT_CERT_URL
}

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
})

export const firebaseAdmin = {
  firebase,
  admin,
  firestore: firebase.firestore(),
  auth: firebase.auth()
}
