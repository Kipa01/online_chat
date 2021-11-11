import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    if (loading) {
        return <Loader/>
    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    return (
        <div className="chat">
            <div className="chat__container container">
                <div className="chat__body">
                    <div className="chat__messages">
                        {messages.map((message, idx) =>
                            (
                                <div
                                    className="chat__message message-chat"
                                    key={idx}
                                    style={{
                                        marginLeft: user.uid === message.uid ? 'auto' : 'none',
                                        marginRight: user.uid === message.uid ? 'none' : 'auto',
                                        textAlign: user.uid === message.uid ? 'right' : 'none'
                                    }}
                                >
                                    <div
                                        className="message-chat__avatar"
                                        style={{
                                            marginLeft: user.uid === message.uid ? 'auto' : 'none'
                                        }}
                                    >
                                        <img src={message.photoURL} alt=""/>
                                    </div>
                                    <div className="message-chat__body">
                                        {message.text}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="chat__input">
                    <textarea
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                </div>
                <div className="chat__button" onClick={sendMessage}>
                    Send
                </div>
            </div>
        </div>
    );
};

export default Chat;