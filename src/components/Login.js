import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (
        <div className="login">
            <div className="login__container container">
                <div className="login__body">
                    <div className="login__btn" onClick={login}>
                        Login with Google
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;