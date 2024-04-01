// import React, { createContext, useContext, useEffect, useState } from 'react';
// import {getUserFromLocalCookie} from "@/lib/auth";
//
//
// let userState:any;
//
// const UserContext = createContext({ user: null, loading: false });
//
// // @ts-ignore
// export const UserProvider = ({ value, children }) => {
//     const { user } = value;
//
//     useEffect(() => {
//         if (!userState && user) {
//             userState = user;
//         }
//     }, []);
// x
//     return <User.Provider value={value}>{children}</User.Provider>;
// };
//
// export const useUser = () => useContext(UserContext);
//
// export const useFetchUser = () => {
//     const [data, setUser] = useState({
//         user: userState || null,
//         loading: userState === undefined,
//     });
//
//     useEffect(() => {
//         if (userState !== undefined) {
//             return;
//         }
//
//         let isMounted = true;
//         const resolveUser = async () => {
//             const user = await getUserFromLocalCookie();
//             if (isMounted) {
//                 setUser({ user, loading: false });
//             }
//         };
//         resolveUser();
//
//         return () => {
//             isMounted = false;
//         };
//     }, []);
//
//     return data;
// };
