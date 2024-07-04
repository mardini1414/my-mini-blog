import React, { Dispatch, SetStateAction } from 'react';

export type UserModalContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  userId?: number;
  setUserId?: Dispatch<SetStateAction<number | undefined>>;
};

export type UserModalProviderProps = {
  children: React.ReactNode;
};
