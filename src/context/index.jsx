import { createContext } from 'react';

const UserContext = createContext(null);
const FirebaseContext = createContext(null);
const AppDataContext = createContext(null);

export { FirebaseContext, UserContext, AppDataContext };
