import { createContext, useContext, useState } from 'react';
import initialCards from './cards-data';


const CardContext = createContext();

export default function CardProvider({ children }) {

  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const stateAndSetters = { 
    deck, setDeck, 
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard, 
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo
  };

  return <CardContext.Provider value={stateAndSetters}>
    {children}
  </CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}





