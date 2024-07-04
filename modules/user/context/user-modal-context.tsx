'use client';

import React, { createContext, useContext, useState } from 'react';
import {
  UserModalContextType,
  UserModalProviderProps,
} from './user-modal-context.types';

const UserModalContext = createContext<UserModalContextType | undefined>(
  undefined
);

export function useUserModal() {
  const context = useContext<UserModalContextType | undefined>(
    UserModalContext
  );
  if (context === undefined) {
    throw new Error('useUserModal must be used within a UserModalProvider');
  }
  return context;
}

export function UserModalProvider({ children }: UserModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();
  return (
    <UserModalContext.Provider value={{ isOpen, setIsOpen, userId, setUserId }}>
      {children}
    </UserModalContext.Provider>
  );
}
