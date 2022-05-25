import { createContext, useContext } from 'react';

const CardContext = createContext();

export function CardProvider({ children }) {
  return <CardContext.Provider value={''}>
    {children}
  </CardContext.Provider>;
}

export default function useCardContext() {
  return useContext(CardContext);
}
