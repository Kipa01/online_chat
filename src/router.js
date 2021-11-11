import {CHAT_PATH, LOGIN_PATH} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
    {
        path: LOGIN_PATH,
        component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_PATH,
        component: Chat
    }
]