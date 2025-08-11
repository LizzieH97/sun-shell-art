"use client";
import { useState } from "react";
import NavBar from "./components/navBar";
import { mockData } from "./data/mockData";
import ItemCard from "./components/itemCard";
import BasketItems from "./components/basketItems";
import Footer from "./components/footer";

type ItemProps = {
  id: number;
  pic: string;
  price: number;
  name: string;
};

export default function Home() {
  const [basketItems, setBasketItems] = useState<ItemProps[]>([]);

  const addToBasket = (item: ItemProps) => {
    setBasketItems((prev) => [...prev, item]);
  };

  const removeFromBasket = (id: number) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };
  const boxesStyling =
    "bg-gradient-to-r from-beige via-petal to-peach w-full m-2 p-2 border-8 border-grape rounded-3xl";
  return (
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div
          className={`${boxesStyling} flex flex-col items-center justify-center`}
        >
          <div className="flex items-center justify-around">
            <img
              src="/logo.png"
              alt="Logo"
              className="rounded-full border-8 border-grape object-cover w-40 h-48 m-4 w-56 h-56"
            />
            <h1 className="text-5xl text-grape font-bold text-center ">
              Welcome to Sun Shell Art!
            </h1>
          </div>

          <div className="flex items-center justify-around">
            <div className=" text-center w-96 ">
              <h2 className="text-2xl text-grape font-bold mb-2">
                About the artist
              </h2>
              <p className="text-lg text-grape font-normal ">
                Paragraph about Michelle Paragraph about Michelle Paragraph
                about Michelle Paragraph about Michelle Paragraph about Michelle
                Paragraph about Michelle Paragraph about Michelle Paragraph
                about Michelle Paragraph about Michelle Paragraph about Michelle
              </p>
            </div>
            <img
              src="michelle.jpg"
              alt="Michelle"
              className="rounded-full border-8 border-grape object-cover w-44 h-44 m-4 w-56 h-64"
            />
          </div>
        </div>
        <div
          className={
            "flex flex-row items-center justify-between flex-flow-row bg-lavender border-4 border-grape w-full rounded-3xl m-2"
          }
        >
          {mockData.map((item: ItemProps) => {
            return (
              <ItemCard
                key={item.id}
                {...item}
                onAdd={() => addToBasket(item)}
              />
            );
          })}
        </div>
      </main>
      <footer className="row-start-3 flex w-full flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
