import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth)
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__title">
                    Online Chat
                </div>
                <div className="header__buttons">
                    {
                        user ?
                            <div onClick={() => auth.signOut()} className="header__btn">Logout</div>
                            :
                            <div className="header__btn">Login</div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;