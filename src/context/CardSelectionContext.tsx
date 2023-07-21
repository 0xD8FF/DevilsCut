"use client";
import React, { createContext, useReducer } from "react";

interface Card {
  tokenId: string;
  value: string;
  isSelected: boolean;
}

type State = {
  selectedCards: Card[];
};

type Action =
  | { type: "add"; tokenId: string; value: string }
  | { type: "select"; tokenId: string }
  | { type: "selectAll" }
  | { type: "addUnselected"; tokenId: string; value: string }
  | { type: "unselect"; tokenId: string }
  | { type: "unselectAll" }
  | { type: "updateValue"; tokenId: string; value: string }
  | { type: "remove"; tokenId: string };

const initialState: State = { selectedCards: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        selectedCards: [
          ...state.selectedCards,
          { tokenId: action.tokenId, value: action.value, isSelected: true },
        ],
      };
    case "select":
      return {
        selectedCards: state.selectedCards.map((card) =>
          card.tokenId === action.tokenId ? { ...card, isSelected: true } : card
        ),
      };
    case "selectAll":
      return {
        selectedCards: state.selectedCards.map((card) =>
          card.isSelected === false ? { ...card, isSelected: true } : card
        ),
      };
    case "addUnselected":
      return {
        selectedCards: [
          ...state.selectedCards,
          { tokenId: action.tokenId, value: action.value, isSelected: false },
        ],
      };
    case "unselect":
      return {
        selectedCards: state.selectedCards.map((card) =>
          card.tokenId === action.tokenId
            ? { ...card, isSelected: false }
            : card
        ),
      };
    case "unselectAll":
      return {
        selectedCards: state.selectedCards.map((card) =>
          card.isSelected === true ? { ...card, isSelected: false } : card
        ),
      };
    case "remove":
      return {
        selectedCards: state.selectedCards.filter(
          (card) => card.tokenId !== action.tokenId
        ),
      };
    case "updateValue":
      return {
        selectedCards: state.selectedCards.map((card) =>
          card.tokenId === action.tokenId
            ? { ...card, value: action.value }
            : card
        ),
      };
    default:
      throw new Error();
  }
}

interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const CardSelectionContext = createContext<ContextType | undefined>(
  undefined
);

export function CardSelectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardSelectionContext.Provider value={{ state, dispatch }}>
      {children}
    </CardSelectionContext.Provider>
  );
}
