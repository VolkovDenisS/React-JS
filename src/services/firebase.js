import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPCrxeuGDEAhrxeeG19wFc0i7mDEtEE1o",
  authDomain: "gb-reacthw.firebaseapp.com",
  databaseURL: "https://gb-reacthw-default-rtdb.firebaseio.com",
  projectId: "gb-reacthw",
  storageBucket: "gb-reacthw.appspot.com",
  messagingSenderId: "787400451602",
  appId: "1:787400451602:web:15c35afc846aa7c4bedacb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
  document.cookie = `userEmail=${email}`
}


export const logOut = async () => await signOut(auth);

export const database = getDatabase(app);
export const userRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');
export const messagesRef = ref(database, 'messages');
export const getChatRefById = (id) => ref(database, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) => ref(database, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(database, `messages/${chatId}`);

