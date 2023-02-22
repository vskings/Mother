import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <AuthContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </AuthContext.Provider>
  );
};
