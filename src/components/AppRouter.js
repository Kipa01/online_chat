import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../router";
import {CHAT_PATH, LOGIN_PATH} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, component}) =>
                    <Route
                        key={path}
                        path={path}
                        component={component}
                    />
                )}
                <Redirect to={CHAT_PATH}/>
            </Switch>
        ) :
        (
            <Switch>
                {publicRoutes.map(({path, component}) =>
                    <Route
                        key={path}
                        path={path}
                        component={component}
                    />
                )}
                <Redirect to={LOGIN_PATH}/>
            </Switch>
        )
};

export default AppRouter;