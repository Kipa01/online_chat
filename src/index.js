import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBRiDcEDivprmBB2yRoqkvCYQch1Ckbnmg",
    authDomain: "online-chat-01.firebaseapp.com",
    projectId: "online-chat-01",
    storageBucket: "online-chat-01.appspot.com",
    messagingSenderId: "155190467274",
    appId: "1:155190467274:web:11ea1035672f8e2d2b7233",
    measurementId: "G-KJK4JYHRHW"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
