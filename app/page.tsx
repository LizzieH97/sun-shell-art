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
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center p-8 pb-20 gap-16 w-full">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div
          className={`${boxesStyling} flex flex-col items-center justify-center`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="rounded-full border-8 border-grape object-cover m-4 w-56 h-56"
            />
            <h1 className="text-5xl text-grape font-bold text-center ">
              Welcome to Sun Shell Art!
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-around gap-6 mt-6">
            <div className="text-center w-full max-w-md px-4">
              <h2 className="text-xl sm:text-2xl text-grape font-bold mb-2">
                About the artist
              </h2>
              <p className="text-base sm:text-lg text-grape font-normal">
                Paragraph about Michelle Paragraph about Michelle Paragraph
                about Michelle Paragraph about Michelle Paragraph about Michelle
                Paragraph about Michelle Paragraph about Michelle Paragraph
                about Michelle Paragraph about Michelle Paragraph about Michelle
              </p>
            </div>
            <img
              src="michelle.jpg"
              alt="Michelle"
              className="rounded-full border-8 border-grape object-cover w-32 h-32 sm:w-40 sm:h-44 lg:w-56 lg:h-64 m-4"
            />
          </div>
        </div>
        <div
          className={
            "flex flex-wrap items-center justify-center bg-lavender border-4 border-grape w-full rounded-3xl m-2 p-4 gap-4"
          }
        >
          {mockData.map((item: ItemProps) => {
            return (
              <ItemCard
                key={item.id}
                pic={item.pic}
                id={item.id}
                name={item.name}
                price={item.price}
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
