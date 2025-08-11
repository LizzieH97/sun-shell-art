"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface ItemProps {
  id: number;
  name: string;
  price: number;
  pic: string;
}

interface BasketContextType {
  basket: ItemProps[];
  addToBasket: (item: ItemProps) => void;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basket, setBasket] = useState<ItemProps[]>([]);

  const addToBasket = (item: ItemProps) => {
    setBasket((prev) => [...prev, item]);
  };

  const removeFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used inside a BasketProvider");
  }
  return context;
}
