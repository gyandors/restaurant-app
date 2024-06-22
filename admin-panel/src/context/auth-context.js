import { createContext, useState } from "react";

export const authContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("idToken"));

  function handleLogin(data) {
    const { idToken } = data;
    setIsLoggedIn(true);
    localStorage.setItem("idToken", idToken);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("idToken");
  }

  const value = {
    isLoggedIn: isLoggedIn,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
