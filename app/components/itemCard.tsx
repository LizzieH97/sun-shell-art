"use client";
import { useBasket } from "../context/basketContext";

export default function ItemCard({ id, name, price, pic }: any) {
  const { addToBasket } = useBasket();

  return (
    <div className="w-60 h-80 bg-beige p-3 rounded-2xl border-4 border-grape m-2 text-forest">
      <img
        src={pic}
        alt={name}
        className="h-48 w-52 rounded-xl object-cover border-4 border-forest"
      />
      <div className="flex flex-col gap-0">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>£{price}</p>
        <button
          className="bg-grape text-cream border-4 border-lavender font-bold py-2 rounded-md hover:bg-lavender hover:text-grape mb-2"
          onClick={() => addToBasket({ id, name, price, pic })}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
}
