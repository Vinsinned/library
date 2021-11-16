import { initializeApp, firebase } from "@firebase/app";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAVS1LSz00W1Cbsdwm3VPnMRYVyGjPO-ZY",
  authDomain: "library-12875.firebaseapp.com",
  databaseURL: "https://library-12875-default-rtdb.firebaseio.com",
  projectId: "library-12875",
  storageBucket: "library-12875.appspot.com",
  messagingSenderId: "234885163934",
  appId: "1:234885163934:web:c3da9b0ee29cee4389048f"
});
const firestore = getFirestore();
const bookDoc = doc(firestore, 'books/verta');
async function readDoc() {
  const mySnapshot = await getDoc(bookDoc);
  if (mySnapshot.exists()) {
    const docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`)
  }
}
const ordersCollection = collection(firestore, 'books')
async function addDocument() {
  const newDoc = await addDoc(ordersCollection, {
    author: 'vinson',
    title: 'vinson'
    })
}
function addBook() {
  const bookData = {
    name: 'Verta',
    author: 'THE V'
  }
  setDoc(bookDoc, bookData);
}
//bring back the usual javascript for now