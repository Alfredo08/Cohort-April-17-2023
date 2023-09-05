import { createContext } from "react";

const UsersContext = createContext({
    users: [],
    isLoggedIn: false,
    addUser: () => {}
});

export default UsersContext;