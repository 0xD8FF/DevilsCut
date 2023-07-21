import { create } from "domain";
import { createContext, useReducer } from "react";

export const ItemsContext = createContext("");
export const ItemsDispatchContext = createContext("");

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(reducer, initialItems);
  return (
    <ItemsContext.Provider value={items}>
      <ItemsDispatchContext.Provider value={dispatch}>
        {children}
      </ItemsDispatchContext.Provider>
    </ItemsContext.Provider>
  );
}

function reducer(items, action) {
  switch (action.type) {
    case "add":
      return [...items, action.payload];
    case "remove":
      return items.filter((item) => item.tokenId !== action.payload);
    default:
      throw new Error("Unexpected action");
  }
}

const initialItems: string[] = [];
