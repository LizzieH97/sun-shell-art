"use client";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

import { useBasket } from "../context/basketContext";
type ItemProps = {
  name: string;
  id: number;
  price: number;
  pic: string;
};
export default function Basket() {
  const { basket, removeFromBasket } = useBasket();

  return (
    <div className="font-delius grid grid-rows-[10px_1fr_20px] items-center bg-forest justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-start-1 w-full">
        <NavBar />
      </div>
      <main className="row-start-2 sm:items-start w-full flex flex-col items-center justify-center">
        <div className="bg-bark w-full m-2 p-2 border-8 border-lavender rounded-3xl flex flex-col items-center justify-center">
          <h1 className="text-5xl text-cream font-bold text-center m-4">
            Your Basket
          </h1>
          {basket.length === 0 && (
            <p className="bg-petal border-4 border-forest p-4 rounded-3xl text-xl text-forest font-bold">
              No items in basket
            </p>
          )}
          {basket.map((item: ItemProps) => (
            <div className="w-60 h-68 bg-petal p-3 rounded-2xl border-4 border-bark m-1">
              <img
                src={item.pic}
                alt={item.name}
                className="h-48 rounded-xl object-cover"
              />
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p>£{item.price}</p>

                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="bg-lavender text-bark py-2 w-12 h-12 rounded-md hover:bg-bark hover:text-cream flex items-center justify-center"
                >
                  <img src="/bin.png" className="w-8 h-8"></img>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full">
        <Footer />
      </footer>
    </div>
  );
}
