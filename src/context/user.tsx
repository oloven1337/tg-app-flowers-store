import { createContext, useContext } from 'react';

interface UserContextType {
  avatar: string;
  setAvatar: (src: string) => void;
}

export const initialStateUser: UserContextType = {
  avatar: '',
  setAvatar: () => void 0,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

export default UserContext;